<template>
  <confirm-button   :ref="ref"
                    :label="$tl(label)"
                    :type="type"
                    :icon="icon"
                    :size="size"
                    :disabled="disabled"
                    :promptMessage="$tl(promptMessage)"
                    :confirmMessage="$tl(confirmMessage)"
                    :cancelMessage="$tl(cancelMessage)"
                    :confirmButtonText="$tl(confirmButtonText)"
                    :cancelButtonText="$tl(cancelButtonText)"
                    :beforeConfirmAction="checkParams"
                    :confirm-action="confirm"
                    :cancel-action="cancel">
  </confirm-button>
</template>

<script>
import lodash from 'lodash'
import ConfirmButton from './ConfirmButton'
import Emitter from '../mixins/emitter'
export default {
  name: 'XConfirmButton',
  componentName: 'XConfirmButton',
  components: {
    [ConfirmButton.name]: ConfirmButton
  },
  mixins: [Emitter],
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    icon: {
      type: String,
      default: ''
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    label: {
      type: String,
      default: ''
    },
    promptMessage: String,
    confirmMessage: String,
    cancelMessage: String,
    checkParamsNotNull: Boolean,
    checkParamsNotNullErrorMessage: String,
    confirmButtonText: String,
    cancelButtonText: String,
    url: {
      required: true,
      type: String
    },
    urlStyle: String,
    httpMethod: {
      type: String,
      default: 'get'
    },
    query: Object,
    params: Object,
    processSuccess: Function
  },
  data () {
    return {
      ref: 'button',
      internalParams: this.query ? this.query : {}
    }
  },
  mounted () {
    if (!this.disabled) {
      this.$on('menu-item-handleClick', () => {
        this.broadcastNotComp('menu-item-handleClick')
      })
    }
  },
  methods: {
    emitEventHandler (event) {
      this.$emit(event, ...Array.from(arguments).slice(1))
    },
    setParams (params) {
      this.internalParams = params
    },
    checkParams () {
      if (this.checkParamsNotNull) {
        if (!this.internalParams) {
          this.$message({type: 'error', message: this.checkParamsNotNullErrorMessage})
          return false
        }
        const _p = Object.keys(this.internalParams)
        if (!_p || _p.length === 0) {
          this.$message({type: 'error', message: this.checkParamsNotNullErrorMessage})
          return false
        }
      }
      return true
    },
    confirm () {
      let url = this.url
      let _params = {}
      if (this.urlStyle === 'restful') {
        if (!lodash.endsWith(url, '/')) { url += '/' }
        if (this.internalParams.id) { url += this.internalParams.id }
      }
      Object.assign(_params, this.internalParams)
      Object.assign(_params, this.params)
      const config = {url: url, method: this.httpMethod}
      switch (this.httpMethod.toUpperCase()) {
        case 'GET':config.params = _params; break
        case 'DELETE':config.params = _params; break
        case 'POST':config.data = _params; break
        case 'PUT':config.data = _params; break
        case 'PATCH':config.data = _params; break
      }
      this.$axios(config).then(response => {
        this.emitEventHandler('confirm-success')
        if (typeof this.processSuccess === 'function') {
          this.processSuccess(response)
        } else {
          this.defaultProcessSuccess(response)
        }
      })
    },
    cancel () {
      this.emitEventHandler('cancel')
    },
    defaultProcessSuccess (response) {
      const data = response.data
      if (data) {
        this.$message({type: 'success', message: data.message || this.$tl(this.confirmMessage)})
      }
    }
  },
  watch: {}
}
</script>
