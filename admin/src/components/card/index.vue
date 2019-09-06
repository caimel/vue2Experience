<template>
  <div class="x-card">
    <el-card :body-style="bodyStyle" :shadow="shadow">
      <template slot="header" v-if="$slots.header || header">
        <slot name="header">{{ header }}</slot>
      </template>
      <slot></slot>
      <!-- 自定义slot name -->
      <template v-if="slots">
      <template v-if="slots.header" slot="header"><slot :name="slots.header"></slot></template>
      <slot v-if="slots.content" :name="slots.content"></slot>
      </template>
    </el-card>
  </div>
</template>

<script>
import ElCard from 'element-ui/lib/card'

export default {
  name: 'XCard',
  components: {
    [ElCard.name]: ElCard
  },
  props: {
    header: {},
    bodyStyle: {
      type: Object,
      default: function () {
        return {
          height: 'calc(100% - 38px)',
          overflow: 'auto'
        }
      }
    },
    shadow: {
      type: String
    },
    slots: Object
  }
}
</script>

<style scoped>
  .x-card{
    height: 100%;
    width: 100%;
    /*padding: 5px 5px 5px 5px;*/
    /*margin: 2px 2px 2px 2px;*/
  }
  .el-card{
    height: 100%;
    width: 100%;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
  }
</style>
