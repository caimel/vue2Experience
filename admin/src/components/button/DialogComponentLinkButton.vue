<template>
  <!--<fragment>-->
  <span>
    <click-button :type="type"
                  :icon="icon"
                  :loading="loading"
                  :disabled="disabled"
                  :plain="plain"
                  :round="round"
                  :circle="circle"
                  :size="size"
                  :label="$tl(label)"
                  @click="click"></click-button>
    <x-component-view-dialog :ref="dialogRef"
                   :title="$tl(title)" :width="width" :height="height"
                             modalAppendToBody
                             :close-on-click-modal="false"
                             @open="() => emitEventHandler('edit-dialog-open')"
                             @component-link ="() => emitEventHandler('component-link')"
                             :component="component" :compProps="_compProps"></x-component-view-dialog>
  </span>
  <!--</fragment>-->
</template>

<script>
import lodash from 'lodash'
import XComponentViewDialog from '@/components/dialog/XComponentViewDialog'
export default {
  name: 'DialogComponentLinkButton',
  componentName: 'DialogComponentLinkButton',
  components: {
    [XComponentViewDialog.name]: XComponentViewDialog
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
    title: {
      type: String,
      default: ''
    },
    width: String,
    height: String,
    component: String,
    compProps: Object,
    checkQueryNotNull: Boolean,
    checkQueryNotNullErrorMessage: String,
    query: Object,
    queryKeys: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      dialogRef: 'dialogRef',
      internalQuery: this.query ? this.query : {}
    }
  },
  computed: {
    _compProps: function () {
      const _props = lodash.cloneDeep(this.compProps)
      _props.query = _props.query || {}
      Object.assign(_props.query, this.internalQuery)
      return _props
    }
  },
  mounted () {
    this.$on('menu-item-handleClick', () => {
      this.click()
    })
  },
  methods: {
    emitEventHandler (event) {
      this.$emit(event, ...Array.from(arguments).slice(1))
    },
    setQuery (query) {
      if (this.queryKeys && this.queryKeys.length > 0) {
        const _query = {}
        this.queryKeys.forEach((item) => {
          _query[item] = query[item]
        })
        this.internalQuery = _query
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
        this.$refs[this.dialogRef].open()
      }
    }
  }
}
</script>
