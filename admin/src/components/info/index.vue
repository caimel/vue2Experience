<template>
  <div class="x-info-container">
    <template v-for="(inline_items,inline_index) in internalItems">
      <template v-if="inline_items.length === 1">
        <x-info-item :key="inline_index" :label="inline_items[0].label" :content="inline_items[0].content"></x-info-item>
      </template>
      <template v-else>
        <el-form-item :key="inline_index">
          <template v-for="(item,index) in inline_items">
            <el-col :key="index" :span="Math.floor(24 / inline_items.length)">
              <x-info-item :key="inline_index" :label="item.label" :content="item.content"></x-info-item>
            </el-col>
          </template>
        </el-form-item>
      </template>
    </template>
  </div>
</template>

<script>
import XInfoItem from './item'
export default {
  name: 'XInfo',
  components: {
    [XInfoItem.name]: XInfoItem
  },
  props: {
    items: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data: function () {
    return {
      internalItems: this.items
    }
  },
  methods: {
    setItems (items) {
      this.internalItems = items
    }
  }
}
</script>

<style scoped>
  .x-info-container {
    height: 100%;
    /*display: flex;*/
    /*display: -webkit-flex;*/
    /*flex-wrap: nowrap;*/
  }
  .x-info-container__body{
    padding: 5px 20px;
  }
</style>
