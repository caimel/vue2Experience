<template>
  <div class="x-form-panel">
    <div class="x-form-panel__title"
         :class="[{ 'x-form-panel__title--center': titleCenter }]">{{title}}</div>
    <div class="x-form-panel__body">
      <x-form :ref="ref"
              :key="formKey"
              :disabled="!internalForm.editable" :model="internalForm.model" :rules="internalForm.rules"
              :items="internalForm.items"
              :label-position="internalForm.labelPosition"
              :label-width="internalForm.labelWidth"></x-form>
      <div v-show="internalForm.editable" class="x-form-panel__footer">
        <el-button v-if="showReset" type="warning" @click="reset">{{resetBtnText}}</el-button>
        <el-button v-if="showConfirm" type="primary" @click="submitHandler">{{confirmBtnText}}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import XForm from '@/components/form/XForm'
import methods from '../mixins/methods'

export default {
  name: 'XFormPanel',
  components: {
    [XForm.name]: XForm
  },
  mixins: [methods],
  props: {
    title: {
      type: String,
      default: ''
    },
    titleCenter: Boolean,

    form: {
      type: Object,
      required: true
    },

    showReset: {
      type: Boolean,
      default: true
    },
    resetBtnText: {
      type: String,
      default: 'Reset'
    },
    showConfirm: {
      type: Boolean,
      default: true
    },
    confirmBtnText: {
      type: String,
      default: 'Confirm'
    }
  },
  data () {
    return {
      ref: 'xForm',
      internalForm: {},
      formKey: 1,
      submit: {},
      loadItems: false,
      loadItemsParams: {},
      loadItemsUrl: '',
      loadItemsErrorMessage: '',
      loadModel: false,
      loadModelUrl: '',
      loadModelParams: {},
      loadModelErrorMessage: ''
    }
  },
  mounted () {
    this.internalForm = this.parseForm(this.form)
    if (this.loadItems) {
      this.loadItemsHandler()
    }
    if (this.loadModel) {
      this.loadModelHandler()
    }
  },
  methods: {
    emitEventHandler (event) {
      this.$emit(event, ...Array.from(arguments).slice(1))
    },

    clearValidate () {
      this.$refs[this.ref].clearValidate()
    },

    reset () {
      this.$refs[this.ref].resetFields()
    },
    submitRemoteHandler () {
      if (!this.submit || !this.submit.url) {
        throw new Error(`This components prop [submit ]  not set`)
      }
      let url = this.submit.url
      let httpMethod = 'post'
      if (this.submit.httpMethod === 'put') {
        httpMethod = 'put'
        url += `/${this.internalForm.model.id}`
      }
      this.fetchInternal(url, httpMethod, this.internalForm.model)
        .then(response => {
          if (this.closeOnSubmitSuccess) {
            this.close()
          }
          this.emitEventHandler('submit-success')
        })
        .catch(err => {
          this.$message({
            type: 'error',
            message: this.submit.errorMessage + '[' + err.response.data.message + ']'})
        })
    },
    submitHandler () {
      this.$refs[this.ref].validate((valid) => {
        if (valid) {
          if (!this.submit) {
            throw new Error(`This components prop [submit ]  not set`)
          }
          if (this.submit.url) {
            this.submitRemoteHandler()
          }
        }
        this.emitEventHandler('submit', this.internalForm.model)
      })
    },
    parseForm (form) {
      let data = {}
      data['model'] = {}
      if (form) {
        let item
        item = form.editable
        if (item) {
          data['editable'] = true
        }
        item = form.items
        if (item) {
          this.loadItemsErrorMessage = item.errorMessage
          if (item.method === 'remote') {
            this.loadItemsUrl = item.url
            this.loadItemsParams = item.params
            if (item.autoLoad === true) {
              this.loadItems = true
            }
          } else if (item.method === 'static') {
            if (typeof item.data === 'object') {
              data['items'] = item.data.items
              data['rules'] = item.data.constraints
            }
          }
        }
        item = form.source
        if (item) {
          this.loadModelErrorMessage = item.errorMessage
          if (item.method === 'remote') {
            this.loadModelUrl = item.url
            this.loadModelParams = item.params
            if (item.autoLoad === true) {
              this.loadModel = true
            }
          } else if (item.method === 'static') {
            if (typeof item.data === 'object') {
              data['model'] = item.data
            }
          }
        }
        item = form.submit
        if (item) {
          if (typeof item === 'object') {
            // this.submit['url'] = item.url
            // this.submit['httpMethod'] = item.httpMethod
            // this.submit['errorMessage'] = item.errorMessage
            this.submit = item
          }
        }
      }
      return data
    },
    setLoadItemsParams (params) {
      this.loadItemsParams = params
    },
    setLoadModelParams (params) {
      this.loadModelParams = params
    },
    loadItemsHandler (params) {
      let _params = {}
      Object.assign(_params, this.loadItemsParams)
      if (params !== undefined) Object.assign(_params, params)
      this.fetchInternal(this.loadItemsUrl, 'get', _params).then(response => {
        let result = response.data
        this.internalForm.items = result.items
        this.internalForm.rules = result.rules
        this.formKey += 1
      }).catch(() => {
        this.$message({type: 'error', message: this.loadItemsErrorMessage})
      })
    },
    loadModelHandler (params) {
      let _params = {}
      Object.assign(_params, this.loadModelParams)
      if (params !== undefined) Object.assign(_params, params)
      this.fetchInternal(this.loadModelUrl + `/${_params.id}`, 'get', _params).then(response => {
        let result = response
        if (result.data instanceof Object) {
          this.internalForm.model = result.data
        }
      }).catch(() => {
        this.$message({type: 'error', message: this.loadModelErrorMessage})
      })
    },
    setModel (model) {
      this.internalForm.model = model
    },
    getModel () {
      return this.internalForm.model
    }
  },
  watch: {}
}
</script>

<style scoped>
  .x-form-panel{
    height: 100%;
  }
  .x-form-panel__body {
    padding: 5px 20px;
    color: #606266;
    font-size: 14px;
    overflow: auto;
  }
  x-form-panel__title--center{
    text-align: center;
  }

  .x-form-panel__footer {
    text-align: right;
  }
</style>
