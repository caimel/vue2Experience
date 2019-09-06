<template>
  <div class="x-single-search-button-container">
    <el-form :ref="xFormRef" :inline="true" :model="model" :rules="rules">
      <el-form-item :prop="model['key']">
        <el-select :placeholder="select_placeholder" v-model="model['key']" :clearable="select_clearable">
          <el-option v-for="item in items" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item :prop="model['key']">
        <el-input :placeholder="input_placeholder" v-model="model['value']" :clearable="input_clearable"></el-input>
      </el-form-item>
       <el-form-item>
         <el-button type="primary" icon="el-icon-search" @click="click"></el-button>
       </el-form-item>
    </el-form>
  </div>
</template>

<script>
import ElInput from 'element-ui/lib/input'
import ElSelect from 'element-ui/lib/select'
import ElFormItem from 'element-ui/lib/form-item'
import ElForm from 'element-ui/lib/form'
export default {
  name: 'XSingleSelectInputButton',
  components: {
    [ElInput.name]: ElInput,
    [ElSelect.name]: ElSelect,
    [ElFormItem.name]: ElFormItem,
    [ElForm.name]: ElForm
  },
  props: {
    select_placeholder: {
      type: String,
      default: '请选择...'
    },
    input_placeholder: {
      type: String,
      default: '请输入...'
    },
    select_clearable: {
      type: Boolean,
      default: true
    },
    input_clearable: {
      type: Boolean,
      default: true
    },
    items: {
      type: Array,
      default: function () {
        return []
      }
    },
    rules: Object
  },
  data () {
    return {
      xFormRef: 'xForm',
      oldModel: {},
      model: {}
    }
  },
  methods: {
    click: function () {
      this.$refs[this.xFormRef].validate((valid) => {
        if (valid) {
          this.$emit('click', this.oldModel, this.model)
          Object.assign(this.oldModel, this.model)
        }
      })
    }
  }
}
</script>

<style scoped>
  .x-single-search-button-container {
    display: inline-block;
    vertical-align: middle;
    margin-left: 4px;
    flex-direction: column;
    justify-content:center;
    align-items:center;
  }
  .el-form-item{
    margin-bottom: 0
  }
</style>
