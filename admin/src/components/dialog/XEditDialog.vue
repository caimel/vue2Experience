<template>
  <el-dialog :visible.sync="visible"
             :title="title"
             :width="width"
             :fullscreen="fullscreen"
             :top="top"
             :modal="modal"
             :modal-append-to-body="modalAppendToBody"
             :append-to-body="appendToBody"
             :lock-scroll="lockScroll"
             :custom-class="customClass"
             :close-on-click-modal="closeOnClickModal"
             :close-on-press-escape="closeOnPressEscape"
             :show-close="showClose"
             :before-close="beforeClose"
             :center="center"
             @open="() => emitEventHandler('open')"
             @close="() => emitEventHandler('close')"
             @closed="() => emitEventHandler('closed')">
    <template name="title">
      <slot name="title"></slot>
    </template>
    <x-form :ref="ref"
            :key="formKey"
            :disabled="!internalForm.editable" :model="internalForm.model" :rules="internalForm.rules" :items="internalForm.items"
            label-position="left"
            label-width="120px"></x-form>
    <div v-if="internalForm.editable" slot="footer" class="dialog-footer" >
      <el-button v-if="showCancel" @click="visible = false">{{cancelBtnText}}</el-button>
      <el-button v-if="showReset" type="warning" @click="reset">{{resetBtnText}}</el-button>
      <el-button v-if="showConfirm" type="primary" @click="submitHandler">{{confirmBtnText}}</el-button>
    </div>
  </el-dialog>
</template>

<script>
import ElDialog from 'element-ui/lib/dialog'
import XForm from '../form/XForm'
import methods from '../mixins/methods'
export default {
  name: 'XEditDialog',
  components: {
    [ElDialog.name]: ElDialog,
    [XForm.name]: XForm
  },
  mixins: [methods],
  props: {
    title: {
      type: String,
      default: ''
    },

    modal: {
      type: Boolean,
      default: true
    },

    modalAppendToBody: {
      type: Boolean,
      default: true
    },

    appendToBody: {
      type: Boolean,
      default: false
    },

    lockScroll: {
      type: Boolean,
      default: true
    },

    closeOnClickModal: {
      type: Boolean,
      default: true
    },

    closeOnPressEscape: {
      type: Boolean,
      default: true
    },

    showClose: {
      type: Boolean,
      default: true
    },

    width: String,

    fullscreen: Boolean,

    customClass: {
      type: String,
      default: ''
    },

    top: {
      type: String,
      default: '15vh'
    },
    beforeClose: Function,
    center: {
      type: Boolean,
      default: false
    },
    // X-Form Attributes
    form: {
      type: Object,
      required: true
    },

    beforeOpen: Function,

    showCancel: {
      type: Boolean,
      default: true
    },
    cancelBtnText: {
      type: String,
      default: 'Cancel'
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
    },
    closeOnSubmitSuccess: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      ref: 'xForm',
      visible: false,
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
  },
  methods: {
    emitEventHandler (event) {
      this.$emit(event, ...Array.from(arguments).slice(1))
    },
    open () {
      if (typeof this.beforeOpen === 'function') {
        this.beforeOpen()
      }
      this.visible = true
    },
    close () {
      this.visible = false
    },
    clearValidate () {
      this.$refs[this.ref].clearValidate()
    },
    reset () {
      this.$refs[this.ref].resetFields()
    },
    submitHandler () {
      this.$refs[this.ref].validate((valid) => {
        if (valid) {
          if (!this.submit) {
            console.error(`This components prop [submit ]  not set`)
            return
          }
          if (typeof this.submit.callback === 'function') {
            this.submit.callback(this.internalForm.model)
            this.emitEventHandler('submit-success')
            if (this.closeOnSubmitSuccess) {
              this.close()
            }
          } else if (this.submit.url) {
            let url = this.submit.url
            let httpMethod = 'post'
            if (this.submit.httpMethod === 'put') {
              httpMethod = 'put'
              if (this.internalForm.model.id) url += `/${this.internalForm.model.id}`
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
                  message: this.submit.errorMessage + '[' + err.response.data.message + ']'
                })
              })
          }
        }
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
      let url = this.loadModelUrl
      if (_params.id) url += `/${_params.id}`
      this.fetchInternal(url, 'get', _params).then(response => {
        let result = response
        if (result.data instanceof Object) {
          this.internalForm.model = result.data
        }
      }).catch(() => {
        this.$message({type: 'error', message: this.loadModelErrorMessage})
      })
    }
  }
}
</script>

<style scoped>
  .dialog-container {
    margin-left: 50px;
  }
</style>
