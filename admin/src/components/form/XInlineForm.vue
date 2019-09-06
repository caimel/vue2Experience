<template>
  <el-form  :key="key"
            :ref="ref"
            :model="model"
            :rules="rules"
            :inline="true"
            :label-position="labelPosition"
            :label-width="labelWidth"
            :labelSuffix="labelSuffix"
            :show-message="showMessage"
            :inline-message="inlineMessage"
            :status-icon="statusIcon"
            :validate-on-rule-change="validateOnRuleChange"
            :size="size"
            :disabled="disabled" @validate="(prop,status)=> emitEventHandler('validate',prop,status)">
          <template v-for="(item,index) in items">
              <x-form-item :key="index" :model="model" :item="item"></x-form-item>
          </template>
          <el-form-item v-if="showReset">
            <el-button type="warning" :size="size" @click="resetFields">{{resetBtnText}}</el-button>
          </el-form-item>
          <el-form-item v-if="showConfirm && items.length > 0">
            <el-button type="primary" :size="size" @click="submitHandler" :icon="confirmIcon">{{confirmBtnText}}</el-button>
          </el-form-item>
    </el-form>
</template>

<script>
import XFormItem from './item'
import methods from './mixins/methods'
import _methods from '../mixins/methods'
export default {
  name: 'XInlineForm',
  mixins: [methods, _methods],
  components: {
    XFormItem
  },
  props: {
    model: Object,
    rules: Object,
    labelPosition: String,
    labelWidth: String,
    labelSuffix: {
      type: String,
      default: ''
    },
    // inline: Boolean,
    // inlineMessage: Boolean,
    statusIcon: {
      type: Boolean,
      default: true
    },
    showMessage: {
      type: Boolean,
      default: true
    },
    inlineMessage: Boolean,
    size: String,
    disabled: Boolean,
    validateOnRuleChange: {
      type: Boolean,
      default: true
    },
    // form-items
    items: {
      type: Array,
      default: function () {
        return []
      }
    },
    showReset: {
      type: Boolean,
      default: false
    },
    resetBtnText: {
      type: String,
      default: 'Reset'
    },
    showConfirm: {
      type: Boolean,
      default: true
    },
    confirmBtnText: {
      type: String,
      default: 'Confirm'
    },
    confirmIcon: String
  },
  data () {
    return {
      key: 1,
      ref: 'form'
    }
  },
  methods: {
    emitEventHandler (event) {
      this.$emit(event, ...Array.from(arguments).slice(1))
    },
    clearValidate () {
      this.$refs[this.ref].clearValidate()
    },
    resetFields () {
      this.$refs[this.ref].resetFields()
    },
    validate (callback) {
      this.$refs[this.ref].validate(callback)
    },
    validateField (prop, cb) {
      this.$refs[this.ref].validateField(prop, cb)
    },
    submitHandler () {
      this.$refs[this.ref].validate((valid) => {
        if (valid) {
          this.emitEventHandler('submit')
        }
      })
    }
  }
}
</script>

<style scoped>
  .form-container {
    height: 100%;
    width: 100%;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    -webkit-flex-direction:column;
  }
</style>
