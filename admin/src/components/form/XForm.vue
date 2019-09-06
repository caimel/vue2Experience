<template>
  <!--<div class="form-container">-->
    <el-form  :key="key"
              :ref="ref"
              :model="model"
              :rules="rules"
              :inline="inline"
              :label-position="labelPosition"
              :label-width="labelWidth"
              :labelSuffix="labelSuffix"
              :show-message="showMessage"
              :inline-message="inlineMessage"
              :status-icon="statusIcon"
              :validate-on-rule-change="validateOnRuleChange"
              :size="size"
              :disabled="disabled" @validate="(prop,status)=> emitEventHandler('validate',prop,status)">
      <template v-for="(inline_items,inline_index) in items">
        <el-row :key="inline_index">
            <template v-for="(item,index) in inline_items">
              <el-col v-show="item.show===undefined? true:show(item.show)" :key="index" :span="item.span? item.span: Math.floor(24 / inline_items.length)">
                <x-form-item :model="model" :item="item"></x-form-item>
              </el-col>
            </template>
        </el-row>
      </template>
    </el-form>
  <!--</div>-->
</template>

<script>
import XFormItem from './item'
import methods from './mixins/methods'
import _methods from '../mixins/methods'
export default {
  name: 'XForm',
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
    inline: Boolean,
    inlineMessage: Boolean,
    statusIcon: {
      type: Boolean,
      default: true
    },
    showMessage: {
      type: Boolean,
      default: true
    },
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
    }
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
    show (config) {
      return this.model[config.prop] === config.eq
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
