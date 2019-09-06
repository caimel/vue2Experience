<template>
  <div>
    <x-form :style="{width: width}" ref="form"
            :label-width="labelWidth"
            :size="size"
            :rules="rules"
            :items="items"
            :model="internalModel"></x-form>
    <div class="footer">
      <el-button type="primary" @click="onSubmit" :loading="submitLoading">{{ $tl(submitText)}}</el-button>
    </div>
  </div>
</template>

<script>
import Qs from 'qs'
import lodash from 'lodash'
export default {
  name: 'index',
  components: {},
  directives: {},
  props: {
    width: {
      type: String,
      default: '100%'
    },
    labelWidth: {
      type: String,
      default: '80px'
    },
    size: {
      type: String,
      default: 'mini'
    },
    query: Object,
    model: Object,
    items: Array,
    rules: Object,
    loadUrl: String,
    submitUrl: String,
    submitHttpMethod: {
      type: String,
      default: 'post'
    },
    urlStyle: String,
    submitText: {
      type: String,
      default: '$button.submit'
    },
    onSubmitRefresh: Boolean
  },
  data () {
    return {
      internalModel: lodash.cloneDeep(this.model) || {},
      submitLoading: false
    }
  },
  computed: {},
  mounted () {
    this.load_data()
  },
  methods: {
    emitEventHandler (event) {
      this.$emit(event, ...Array.from(arguments).slice(1))
    },
    load_data: function () {
      const vm = this
      if (!vm.loadUrl) { return }
      let url = vm.loadUrl
      let _params = {}
      if (vm.urlStyle === 'restful') {
        if (!lodash.endsWith(url, '/')) { url += '/' }
        if (vm.query.id) { url += vm.query.id }
      } else { Object.assign(_params, vm.query) }
      // const loading = vm.$loading({fullscreen: false, lock: true, text: 'Loading', spinner: 'el-icon-loading', background: 'rgba(0, 0, 0, 0.7)'})
      vm.$axios.get(url, vm.query)
        .then((response) => { vm.internalModel = response.data })
        .finally(() => {
          // loading.close()
        })
    },
    onSubmit: function () {
      const vm = this
      vm.$refs['form'].validate((valid) => {
        if (!valid) { return }
        const vm = this
        if (!vm.submitUrl) { return }
        let url = vm.submitUrl
        let _params = {}
        if (!lodash.endsWith(url, '/')) { url += '/' }
        if (this.urlStyle === 'restful') {
          if (vm.query.id) { url += vm.query.id }
        } else {
          const queryString = Qs.stringify(vm.internalModel)
          if (queryString) { url += queryString }
        }
        Object.assign(_params, vm.internalModel)
        vm.$axios({url: url, method: this.submitHttpMethod, data: _params})
          .then(response => {
            vm.$message({type: 'success', message: vm.$t('tips.submit_success')})
            vm.emitEventHandler('dialog-close')
            vm.emitEventHandler('component-link')
            if (vm.onSubmitRefresh) { vm.load_data() }
          }).finally(() => {
            vm.submitLoading = false
          })
      })
    }
  },
  watch: {}
}
</script>

<style scoped>

</style>
