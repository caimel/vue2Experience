<template>
  <div class="x-edit-button-container">
    <el-button :type="type"
               :icon="icon"
               :loading="loading"
               :disabled="disabled"
               :plain="plain"
               :round="round"
               :circle="circle"
               @click="click">{{ label }}</el-button>
    <x-edit-dialog :ref="dialogRef"
                   :title="title"
                   :model="model"
                   :items="items"
                   :tabsItems="tabsItems"
                   :rules="rules"
                   :before-open="beforeOpen"
                   @open="() => emitEventHandler('open')"
                   @submit="(val)=> submit(val)"></x-edit-dialog>
  </div>
</template>

<script>
import ElButton from 'element-ui/lib/button'
import XEditDialog from '@/components/dialog/XEditDialog'
import methods from '@/components/mixins/methods'
export default {
  name: 'XEditDialogButton',
  components: {
    [ElButton.name]: ElButton,
    [XEditDialog.name]: XEditDialog
  },
  mixins: [methods],
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
    items: {
      type: Array,
      default: function () {
        return []
      }
    },
    tabsItems: Object,
    rules: Object,
    // 强制 beforeOpen 必须有返回值
    forcedBeforeOpenReturn: {
      type: Boolean,
      default: false
    },
    beforeOpen: Function,
    url: {
      type: String,
      required: true
    },
    method: {
      type: String,
      default: 'post'
    }
  },
  data () {
    return {
      dialogRef: 'dialogRef',
      model: {}
    }
  },
  created () {
  },
  mounted () {
  },
  watch: {},
  methods: {
    emitEventHandler (event) {
      this.$emit(event, ...Array.from(arguments).slice(1))
    },
    click () {
      if (typeof this.beforeOpen === 'function') {
        this.model = this.beforeOpen()
        if (this.forcedBeforeOpenReturn) {
          if (this.model === undefined) {
            this.model = {}
          }
        }
      }
      this.$refs[this.dialogRef].open()
    },
    submit (val) {
      if (val) {
        this.fetchInternal(this.url, this.method, this.model)
          .then(response => {
            this.$refs[this.dialogRef].close()
          })
      }
    }
  }
}
</script>

<style scoped>
.x-edit-button-container{
  display: inline-block;
  vertical-align: middle;
  margin-left: 4px;
}
</style>
