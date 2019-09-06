export default {
  methods: {
    trigger (method, ...args) {
      const {$refs: { table }} = this
      if (table && table[method]) {
        table[method](...args)
      }
    },
    clearSelection (...args) {
      this.trigger('clearSelection', ...args)
    },
    toggleRowSelection (...args) {
      this.trigger('toggleRowSelection', ...args)
    },
    toggleRowExpansion (...args) {
      this.trigger('toggleRowExpansion', ...args)
    },
    setCurrentRow (...args) {
      this.trigger('setCurrentRow', ...args)
    },
    clearSort () {
      this.trigger('clearSort')
    },
    clearFilter () {
      this.trigger('clearFilter')
    },
    doLayout () {
      this.trigger('doLayout')
    },
    sort (...args) {
      this.trigger('sort', ...args)
    }
  }
}
