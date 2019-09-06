<template>
  <div class="router-link-button__body">
    <click-button :type="type"
                  :icon="icon"
                  :loading="loading"
                  :disabled="disabled"
                  :plain="plain"
                  :round="round"
                  :circle="circle"
                  :size="size"
                  :label="label"
                  @click="click"></click-button>
    <x-router-view-dialog :ref="dialogRef"
                   :title="title" :width="width" :height="height"
                    modalAppendToBody
                   @open="() => emitEventHandler('edit-dialog-open')"></x-router-view-dialog>
  </div>
</template>

<script>
import XRouterViewDialog from '@/components/dialog/XRouterViewDialog'
export default {
  name: 'DialogRouterLinkButton',
  components: {
    [XRouterViewDialog.name]: XRouterViewDialog
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
    to: {
      type: [String, Object],
      required: true
    },

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
      internalQuery: this.query ? this.query : {},
      visible: false
    }
  },
  created () {
    this.currentRoute = this.$route
  },
  computed: {
    internalTo: function () {
      let t = {}
      Object.assign(t, this.to)
      switch (typeof this.to) {
        case 'string':
          t = this.currentRoute.path + '/' + this.to
          break
        case 'object':
          if (this.to.fullpath) {
            t.path = this.to.fullpath
          } else {
            if (this.to.path.startsWith('./')) {
              t.path = this.currentRoute.path.substring(0, this.currentRoute.path.lastIndexOf('/')) +
                this.to.path.substr(1)
            } else {
              t.path = this.currentRoute.path + '/' + this.to.path
            }
          }
          t.query = {}
          // Object.assign(t.query, this.currentRoute.query)
          Object.assign(t.query, this.internalQuery)
          break
      }
      return t
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
        this.$router.push(this.internalTo)
      }
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
