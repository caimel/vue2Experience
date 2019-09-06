<template>
  <el-button :type="type"
               :icon="icon"
               :loading="loading"
               :disabled="disabled"
               :plain="plain"
               :round="round"
               :circle="circle"
               :size="size"
               @click="click">{{ label }}
    </el-button>
</template>

<script>
import ElButton from 'element-ui/lib/button'
export default {
  name: 'ConfirmButton',
  components: {
    [ElButton.name]: ElButton
  },
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
    beforeConfirmAction: Function,
    confirmAction: Function,
    cancelAction: Function,
    promptMessage: {
      type: String,
      default: ''
    },
    $promptMessage: String,
    confirmMessage: {
      type: String,
      default: ''
    },
    cancelMessage: {
      type: String,
      default: ''
    },
    confirmButtonText: {
      type: String,
      default: 'Confirm'
    },
    $confirmButtonText: String,
    promptMessageTitle: {
      type: String,
      default: 'Tips'
    },
    $promptMessageTitle: {
      type: String,
      default: 'confirm.Tips'
    },
    cancelButtonText: {
      type: String,
      default: 'Cancel'
    },
    $cancelButtonText: String
  },
  data () {
    return {
      model: {}
    }
  },
  mounted () {
    this.$on('menu-item-handleClick', () => {
      this.click()
    })
  },
  watch: {},
  methods: {
    emitEventHandler (event) {
      this.$emit(event, ...Array.from(arguments).slice(1))
    },
    click () {
      if (typeof this.beforeConfirmAction === 'function') {
        if (!this.beforeConfirmAction()) {
          return
        }
      }
      const _promptMessage = this.$promptMessage ? this.$t(this.$promptMessage) : this.promptMessage
      const _promptMessageTitle = this.$promptMessageTitle ? this.$t(this.$promptMessageTitle) : this.promptMessageTitle
      this.$confirm(_promptMessage, _promptMessageTitle, {
        confirmButtonText: this.$confirmButtonText ? this.$t(this.$confirmButtonText) : this.confirmButtonText,
        cancelButtonText: this.$cancelButtonText ? this.$t(this.$cancelButtonText) : this.cancelButtonText,
        type: 'warning'
      }).then(() => {
        if (typeof this.confirmAction === 'function') {
          this.confirmAction()
        }
      }).catch(() => {
        if (typeof this.cancelAction === 'function') {
          this.cancelAction()
        }
      })
    }
  }
}
</script>
