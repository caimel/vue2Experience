<template>
  <div class="edit-button__body">
  <click-button :ref="ref"
                :type="type"
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
                @click="click">
  </click-button>
  <x-edit-dialog :ref="dialogRef" :title="title" :form="form" @submit-success="() => emitEventHandler('submit-success')"></x-edit-dialog>
  </div>
</template>

<script>
// import methods from '@/components/mixins/methods'
import XEditDialog from '@/components/dialog/XEditDialog'
export default {
  name: 'XEditButton',
  components: {
    [XEditDialog.name]: XEditDialog
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
    // tooltips
    tooltipDisabled: {
      type: Boolean,
      default: true
    },
    tooltipContent: String,
    tooltipPlacement: String,
    tooltipEffect: String,

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
    checkFormItemsParamsNotNull: Boolean,
    checkFormItemsParamsNotNullErrorMessage: String,
    checkFormSourceParamsNotNull: Boolean,
    checkFormSourceParamsNotNullErrorMessage: String,
    loadFormItems: Boolean,
    loadFormModel: Boolean

  },
  data () {
    return {
      ref: 'button',
      dialogRef: 'dialogRef',
      loadItemsParams: {},
      loadModelParams: {}
    }
  },
  methods: {
    emitEventHandler (event) {
      this.$emit(event, ...Array.from(arguments).slice(1))
    },
    trigger (ref, method, ...args) {
      this.$refs[ref][method](...args)
    },
    setLoadItemsParams (params) {
      this.loadItemsParams = params
    },
    setLoadModelParams (params) {
      this.loadModelParams = params
    },
    beforeOpen () {
      if (this.checkFormItemsParamsNotNull) {
        if (!this.loadItemsParams) {
          this.$message({type: 'error', message: this.checkFormItemsParamsNotNullErrorMessage})
          return false
        }
        const _p = Object.keys(this.loadItemsParams)
        if (!_p || _p.length === 0) {
          this.$message({type: 'error', message: this.checkFormItemsParamsNotNullErrorMessage})
          return false
        }
      }
      if (this.checkFormSourceParamsNotNull) {
        if (!this.loadModelParams) {
          this.$message({type: 'error', message: this.checkFormSourceParamsNotNullErrorMessage})
          return false
        }
        const _p = Object.keys(this.loadModelParams)
        if (!_p || _p.length === 0) {
          this.$message({type: 'error', message: this.checkFormSourceParamsNotNullErrorMessage})
          return false
        }
      }
      if (this.loadFormItems) {
        this.$refs[this.dialogRef].loadItemsHandler(this.loadItemsParams)
      }
      if (this.loadFormModel) {
        this.$refs[this.dialogRef].loadModelHandler(this.loadModelParams)
      }
      return true
    },
    click () {
      if (!this.beforeOpen()) {
        return
      }
      this.$refs[this.dialogRef].open()
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
