<!--suppress ALL -->
<template>
  <click-button :type="type"
                :icon="icon || icons"
                :loading="loading"
                :disabled="disabled || internalDisabled"
                :plain="plain"
                :round="round"
                :circle="circle"
                :size="size"
                :label="$label ? $t($label) : label"
                :tooltip-disabled="tooltipDisabled"
                :tooltip-content="$t(tooltipInternalContent) || $t(Tooltip_Internal_Content)"
                :tooltip-placement="tooltipPlacement"
                :tooltip-effect="tooltipEffect"
                @click="click"></click-button>
</template>

<script>
export default {
  name: 'EmitEventButton',
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
    collapseStatus: Object,
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    label: {
      type: String,
      default: ''
    },
    $label: String,
    checkQueryNotNull: Boolean,
    checkQueryNotNullErrorMessage: String,
    $checkQueryNotNullErrorMessage: String,
    query: Object,
    // query 的键值的键值对映射
    queryKeys: {
      type: Array,
      default: function () {
        return []
      }
    },
    queryKeyMap: Object,
    // tooltips
    tooltipDisabled: {
      type: Boolean,
      default: true
    },
    tooltipContent: String,
    tooltipPlacement: String,
    tooltipEffect: String,
    eventName: {
      type: String,
      default: 'emit-event'
    },
    eventArguments: Object
  },
  data () {
    return {
      internalDisabled: false,
      internalQuery: this.query ? this.query : {},
      tooltipInternalContent: this.tooltipContent,
      icons: 'el-icon-zoom-out',
      Tooltip_Internal_Content: 'Disable'
    }
  },
  methods: {
    emitEventHandler (event) {
      this.$emit(event, ...Array.from(arguments).slice(1))
    },
    disable (disabled) {
      this.internalDisabled = disabled
    },
    setQuery: function (query) {
      const vm = this
      if (vm.queryKeys && vm.queryKeys.length > 0) {
        const _query = {}
        vm.queryKeys.forEach((item) => {
          if (query[item]) {
            _query[(vm.queryKeyMap && vm.queryKeyMap[item]) ? vm.queryKeyMap[item] : item] = query[item]
          }
        })
        vm.internalQuery = _query // internalTo 绑定到internalQuery，只更新值不触发更新 by zhenglincheng
      } else {
        vm.internalQuery = query
      }
    },
    checkQuery () {
      if (this.checkQueryNotNull) {
        if (!this.internalQuery) {
          this.$message({type: 'error', message: this.$checkQueryNotNullErrorMessage ? this.$t(this.$checkQueryNotNullErrorMessage) : this.checkQueryNotNullErrorMessage})
          return false
        }
        const _p = Object.keys(this.internalQuery)
        if (!_p || _p.length === 0) {
          this.$message({type: 'error', message: this.$checkQueryNotNullErrorMessage ? this.$t(this.$checkQueryNotNullErrorMessage) : this.checkQueryNotNullErrorMessage})
          return false
        }
      }
      return true
    },
    click: function () {
      if (this.checkQuery()) {
        this.emitEventHandler(this.eventName, this.eventArguments, this.internalQuery)
      }
    },
    setTooltipContent (content) {
      this.tooltipInternalContent = content
    },
    setIcon (status) {
      if (status === 'dis_icons') {
        this.internalDisabled = true
      } else {
        this.internalDisabled = false
      }
      this.icons = this.collapseStatus[status].icon
      this.Tooltip_Internal_Content = this.collapseStatus[status].tooltipContent
    }
  }
}
</script>

<style scoped>
  .router-link-button__body {
    display: inline-block;
    vertical-align: middle;
    margin-left: 4px;
  }
</style>
