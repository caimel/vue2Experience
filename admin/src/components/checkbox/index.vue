<script>
import Emitter from 'element-ui/src/mixins/emitter'

/**
 * 重写ElCheckboxGroup 增加prop: multiple。绑定的v-model时不再需要初始化为array了
 * @author zhenglc<zhenglc@sinoregal.cn>
 */
export default {
  name: 'ElCheckboxGroup',

  componentName: 'ElCheckboxGroup',

  mixins: [Emitter],

  inject: {
    elFormItem: {
      default: ''
    }
  },

  props: {
    value: {},
    disabled: Boolean,
    min: Number,
    max: Number,
    size: String,
    fill: String,
    textColor: String,
    multiple: Boolean
  },

  computed: {
    _elFormItemSize () {
      return (this.elFormItem || {}).elFormItemSize
    },
    checkboxGroupSize () {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size
    }
  },

  watch: {
    value (value) {
      this.dispatch('ElFormItem', 'el.form.change', [value])
    }
  },
  created () {
    if (this.multiple && !Array.isArray(this.value)) {
      this.$emit('input', [])
    }
    if (!this.multiple && Array.isArray(this.value)) {
      this.$emit('input', '')
    }
  }
}
</script>

<template>
  <span class="el-checkbox-group" role="group" aria-label="checkbox-group">
    <slot></slot>
  </span>
</template>
