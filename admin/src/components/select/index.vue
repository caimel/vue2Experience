<template>
  <el-select :name="name"
             :id="id"
             :value="value"
             :autoComplete="autoComplete"
             :automaticDropdown="automaticDropdown"
             :size="size"
             :disabled="disabled"
             :clearable="clearable"
             :filterable="filterable"
             :allowCreate="allowCreate"
             :loading="loading"
             :popperClass="popperClass"
             :remote="remote"
             :loadingText="loadingText"
             :noMatchText="noMatchText"
             :noDataText="noDataText"
             :remoteMethod="remoteHttpMethod"
             :filterMethod="filterMethod"
             :multiple="multiple"
             :multipleLimit="multipleLimit"
             :placeholder="placeholder"
             :defaultFirstOption="defaultFirstOption"
             :reserveKeyword="reserveKeyword"
             :valueKey="valueKey"
             :collapseTags="collapseTags"
             :popperAppendToBody="popperAppendToBody"
             @input="(val)=>emitEventHandler('input',val)">
    <template v-for="option in internalOptions">
      <el-option-group v-if="option.options" :key="option.label">
        <el-option v-for="opt in option.options"
                   :key="opt.value"
                   :label="opt.label"
                   :value="opt.value"></el-option>
      </el-option-group>
      <el-option v-else :key="option.value" :label="option.label" :value="option.value"></el-option>
    </template>
  </el-select>
</template>

<script>
export default {
  name: 'XSelect',
  components: {},
  directives: {},
  props: {
    name: String,
    id: String,
    value: {
      required: true
    },
    autoComplete: {
      type: String,
      default: 'off'
    },
    automaticDropdown: Boolean,
    size: String,
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    allowCreate: Boolean,
    loading: Boolean,
    popperClass: String,
    remote: Boolean,
    loadingText: String,
    noMatchText: String,
    noDataText: String,
    // remoteMethod: Function,
    filterMethod: Function,
    multiple: Boolean,
    multipleLimit: {
      type: Number,
      default: 0
    },
    placeholder: String,
    defaultFirstOption: Boolean,
    reserveKeyword: Boolean,
    valueKey: {
      type: String,
      default: 'value'
    },
    collapseTags: Boolean,
    popperAppendToBody: {
      type: Boolean,
      default: true
    },
    options: {
      type: Array,
      default: function () {
        return []
      }
    },
    url: String,
    params: Object
  },
  data () {
    return {
      internalOptions: this.options
    }
  },
  mounted () {
    if (this.remote && !this.filterable) {
      this.remoteHttpMethod()
    }
  },
  methods: {
    emitEventHandler (event) {
      this.$emit(event, ...Array.from(arguments).slice(1))
    },
    setParams (params) {
      this.params = params
    },
    remoteHttpMethod (param) {
      const vm = this
      const _params = {}
      Object.assign(_params, this.params)
      if (!param) {
        Object.assign(_params, {$search: param})
      }
      vm.$axios.get(this.url, _params)
        .then((response) => {
          this.internalOptions = vm._defaultResponseDataProcess(response.data)
        }).catch(err => {
          this.$message({type: 'error', message: '请求错误!:' + '[' + err.response.data.message + ']'})
        })
    },
    _defaultResponseDataProcess (data) {
      if (data && data.data) {
        return data.data
      }
      return []
    }
  }
}
</script>

<style scoped>

</style>
