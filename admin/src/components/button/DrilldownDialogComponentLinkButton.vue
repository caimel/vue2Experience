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
                  :label="$label ? $t($label) : label"
                  @click="click"></click-button>
    <x-drilldown-component-view-dialog :ref="dialogRef"
                   :title="$title ? $t($title) : title" :width="width" :height="height"
                             modalAppendToBody
                             @open="() => emitEventHandler('edit-dialog-open')"
                             @component-link ="() => emitEventHandler('component-link')"
                             @dialog-close ="dialogClose"></x-drilldown-component-view-dialog>
  </span>
  <!--</fragment>-->
</template>

<script>
import XDrilldownComponentViewDialog from '@/components/dialog/XDrilldownComponentViewDialog'
export default {
  name: 'DrilldownDialogComponentLinkButton',
  components: {
    [XDrilldownComponentViewDialog.name]: XDrilldownComponentViewDialog
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
    $label: String,
    title: {
      type: String,
      default: ''
    },
    $title: String,
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
      const _props = {
        query: this.internalQuery
      }
      Object.assign(_props, this.compProps)
      return _props
    }
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
        // debugger
        this.$nextTick(() => {
          this.$refs[this.dialogRef].Add_Tab({label: this.title, component: this.component, props: this.compProps})
        })
      }
    },
    dialogClose () {
      this.$refs[this.dialogRef].close()
    }
  }
}
</script>
