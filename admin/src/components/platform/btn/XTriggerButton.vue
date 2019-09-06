<template>
  <click-button :ref="ref"
                  :label="item.label"
                  :type="item.btnType"
                  :icon="item.icon"
                  :disabled="item.disabled"
                  :plain="item.plain"
                  :round="item.round"
                  :circle="item.circle"
                  @click="triggerAction">
  </click-button>
</template>

<script>
import ClickButton from '../../button/ClickButton'
import methods from '@/components/mixins/methods'
export default {
  name: 'XTriggerButton',
  components: {
    [ClickButton.name]: ClickButton
  },
  mixins: [methods],
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      ref: 'button',
      params: {}
    }
  },
  computed: {},
  methods: {
    emitEventHandler (event) {
      this.$emit(event, ...Array.from(arguments).slice(1))
    },
    checkParams () {
      if (this.item.checkParamsNotNull) {
        if (!this.params) {
          this.$message({type: 'error', message: this.item.checkParamsNotNullErrorMessage})
          return false
        }
        const _p = Object.keys(this.params)
        if (!_p || _p.length === 0) {
          this.$message({type: 'error', message: this.item.checkParamsNotNullErrorMessage})
          return false
        }
      }
      return true
    },
    triggerAction () {
      // before Trigger
      if (!this.checkParams()) return
      const _params = this.params
      if (this.item.url && this.item.httpMethod) {
        let url = this.item.url
        if (this.item.httpMethod === 'delete') {
          url += `/${this.params.id}`
        }
        this.fetchInternal(url, this.item.httpMethod, _params)
          .then(response => {
            this.emitEventHandler('trigger-success')
          })
      }
    }
  }
}
</script>

<style scoped>

</style>
