<template>
  <div class="x-collapse" >
    <el-collapse v-model="activeNames" :accordion="accordion" @change="(val) => emitEventHandler('change', val)">
      <el-collapse-item v-for="(item, index) in items" :key="index" :title="item.title">
        <template slot="title">
          <slot :name="item.slots.title"></slot>
        </template>
        <slot></slot>
        <slot :name="item.slots.content.slot"></slot>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import ElCollapse from 'element-ui/lib/collapse'
import ElCollapseItem from 'element-ui/lib/collapse-item'
export default {
  name: 'XCollapseContainer', // 折叠面板
  components: {
    [ElCollapse.name]: ElCollapse,
    [ElCollapseItem.name]: ElCollapseItem
  },
  props: {
    accordion: Boolean,
    value: {
      type: [Array, String, Number],
      default () {
        return []
      }
    },
    items: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      activeNames: []
    }
  },
  methods: {
    emitEventHandler (event) {
      this.$emit(event, ...Array.from(arguments).slice(1))
    }
  }
}
</script>

<style scoped>
  .x-collapse{
    width: 100%;
    height: 100%;
  }

</style>
