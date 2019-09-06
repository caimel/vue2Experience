<!--suppress ALL -->
<template>
  <click-button :type="type"
                :icon="icon"
                :loading="loading"
                :disabled="disabled"
                :plain="plain"
                :round="round"
                :circle="circle"
                :size="size"
                :label="label"
                :tooltip-disabled="tooltipDisabled"
                :tooltip-content="tooltipInternalContent"
                :tooltip-placement="tooltipPlacement"
                :tooltip-effect="tooltipEffect"
                @click="click"></click-button>
</template>

<script>
export default {
  name: 'RouterLinkButton',
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
    to: {
      type: [String, Object],
      required: true
    },
    replace: Boolean,
    append: Boolean,
    activeClass: String,
    exact: Boolean,
    checkQueryNotNull: Boolean,
    checkQueryNotNullErrorMessage: String,
    query: Object,
    queryKeys: {
      type: Array,
      default: function () {
        return []
      }
    },
    // tooltips
    tooltipDisabled: {
      type: Boolean,
      default: true
    },
    tooltipContent: String,
    tooltipPlacement: String,
    tooltipEffect: String
  },
  data () {
    return {
      internalQuery: this.query ? this.query : {},
      tooltipInternalContent: this.tooltipContent
    }
  },
  created () {
    this.currentRoute = this.$route
  },
  computed: {
    internalTo: function () {
      const vm = this
      let t = {}
      Object.assign(t, vm.to)
      switch (typeof vm.to) {
        case 'string':
          t = this.currentRoute.path + '/' + vm.to
          break
        case 'object':
          if (vm.to.fullpath) {
            t.path = vm.to.fullpath
          } else {
            if (vm.to.path.startsWith('./')) {
              t.path = vm.currentRoute.path.substring(0, vm.currentRoute.path.lastIndexOf('/')) +
                vm.to.path.substr(1)
            } else {
              t.path = vm.currentRoute.path + '/' + vm.to.path
            }
          }
          t.query = {}
          // Object.assign(t.query, vm.currentRoute.query)
          Object.assign(t.query, vm.internalQuery)
          break
      }
      return t
    }
  },
  methods: {
    setQuery: function (query) {
      if (this.queryKeys && this.queryKeys.length > 0) {
        const _query = {}
        this.queryKeys.forEach((item) => {
          if (query[item]) {
            _query[item] = query[item]
          }
        })
        this.internalQuery = _query // internalTo 绑定到internalQuery，只更新值不触发更新 by zhenglincheng
      } else {
        this.internalQuery = query
      }
    },
    checkQuery () {
      if (this.checkQueryNotNull) {
        if (!this.internalQuery) {
          this.$message({type: 'error', message: this.checkQueryNotNullErrorMessage})
          return false
        }
        const _p = Object.keys(this.internalQuery)
        if (!_p || _p.length === 0) {
          this.$message({type: 'error', message: this.checkQueryNotNullErrorMessage})
          return false
        }
      }
      return true
    },
    click () {
      if (this.checkQuery()) {
        const _r = {}
        Object.assign(_r, this.internalTo)
        _r.query._$t = (new Date()).valueOf()// 加入时间戳,防止重复点击时 路由不刷新
        this.$router.push(_r)
      }
    },
    setTooltipContent (content) {
      this.tooltipInternalContent = content
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
