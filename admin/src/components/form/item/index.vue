<template>
  <el-form-item :label="$tl(item.label)"
                :prop="item.prop"
                :label-width="item.labelWidth"
                :required="item.required"
                :rules="item.rules"
                :error="item.error"
                :show-message="item.showMessage"
                :inline-message="item.inlineMessage"
                :size="item.size"
                v-if="!item.hidden">
    <!--
    <template v-if="item.opts">
      <widget v-model="model[item.prop].op" :config="genOperator(item)"></widget>
      <template v-show ="isRange(model)">
        <widget v-model="model[item.prop].begin" :config="item"></widget>
        <widget v-model="model[item.prop].end" :config="item"></widget>
      </template>
      <template v-show ="!isRange(model)">
        <widget v-model="model[item.prop].value" :config="item"></widget>
      </template>
    </template>
    -->
    <widget v-model="model[item.prop]" :config="item"></widget>
  </el-form-item>
</template>
<script>
import Widget from './widget'
import operator from './operator'
export default {
  name: 'XFormItem',
  components: {
    [Widget.name]: Widget
  },
  props: {
    model: Object,
    item: Object
  },
  created () {
    if (this.item.defaultValue) {
      this.model[this.item.prop] = this.item.defaultValue
    }
  },
  methods: {
    genOperator: function (item) {
      // init model
      this.model[item.prop] = {}
      const list = []
      item.opts.forEach((op) => {
        const item = operator[op]
        if (item) {
          list.push(item)
        }
      })
      return {
        widget: 'select',
        disabled: false,
        options: list
      }
    },
    isRange: function (val) {
      if (val === 'range') {
        return true
      }
      return false
    }
  }
}
</script>
