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
                  :tooltip-disabled="tooltipDisabled"
                  :tooltip-content="$t(tooltipContent)"
                  :tooltip-placement="tooltipPlacement"
                  :tooltip-effect="tooltipEffect"
                  @click="click"></click-button>
     <el-dialog :title="$title ? $t($title) : title" :visible.sync="helpVisibleX" :width="width"  append-to-body>
       <iframe v-if="src" :src="src" style="height: 600px;"></iframe>
    </el-dialog>
  </span>
  <!--</fragment>-->
</template>

<script>
import XComponentViewDialog from '@/components/dialog/XComponentViewDialog'
export default {
  name: 'DialogIframeButton',
  components: {
    [XComponentViewDialog.name]: XComponentViewDialog
  },
  props: {
    tooltipDisabled: {
      type: Boolean,
      default: true
    },
    tooltipContent: String,
    tooltipPlacement: String,
    tooltipEffect: String,
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
    src: String,
    helpVisible: false
  },
  data () {
    return {
      helpVisibleX: this.helpVisible
    }
  },
  methods: {
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
      this.helpVisibleX = true
    }
  }
}
</script>
