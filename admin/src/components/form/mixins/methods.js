export default {
  methods: {
    trigger (method, ...args) {
      const {$refs: { xform }} = this
      if (xform && xform[method]) {
        xform[method](...args)
      }
    },
    validate (...args) {
      this.trigger('validate', ...args)
    },
    validateField (...args) {
      this.trigger('validateField', ...args)
    },
    resetFields (...args) {
      this.trigger('resetFields', ...args)
    },
    clearValidate () {
      this.trigger('clearValidate')
    }
  }
}
