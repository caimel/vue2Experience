<template>
  <div class="edit-button__body">
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
                   :form="form"
                   @open="() => emitEventHandler('edit-dialog-open')"
                   @submit-success="() => emitEventHandler('submit-success')"></x-edit-dialog>
  </div>
</template>

<script>
import ElButton from 'element-ui/lib/button'
import XEditDialog from '@/components/dialog/XEditDialog'
import methods from '@/components/mixins/methods'
export default {
  name: 'EditButton',
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
    form: {
      type: Object,
      default: function () {
        return {}
      }
    },
    beforeOpen: Function
  },
  data () {
    return {
      dialogRef: 'dialogRef'
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
        if (!this.beforeOpen()) {
          return
        }
      }
      this.$refs[this.dialogRef].open()
    },
    closeDialog () {
      this.$refs[this.dialogRef].close()
    },
    setLoadItemsParams (params) {
      this.$refs[this.dialogRef].setLoadItemsParams(params)
    },
    setLoadModelParams (params) {
      this.$refs[this.dialogRef].setLoadModelParams(params)
    },
    loadItemsHandler (params) {
      this.$refs[this.dialogRef].loadItemsHandler(params)
    },

    loadModelHandler (params) {
      this.$refs[this.dialogRef].loadModelHandler(params)
    }
  }
}
</script>

<style scoped>
.edit-button__body{
  display: inline-block;
  vertical-align: middle;
  margin-left: 4px;
}
</style>
