<template>
  <div class="x-chart-boxes-container">
    <template v-for="item in internalItems">
      <x-chart :ref="item.id" :key="item.id"
               :height="item.height"
               :width="item.width"
               :settings="item.settings"
               :extend="item.extend"
               :columns="item.columns"
               :data="item.data"
               :title="item.title"
               :initOptions="item.initOptions"
               :tooltipVisible="item.tooltipVisible"
               :legendVisible="item.legendVisible"
               :theme="item.theme"
               :themeName="item.themeName"
               :judgeWidth="item.judgeWidth"
               :widthChangeDelay="item.widthChangeDelay"
               :resizeable="item.resizeable"
               :cancelResizeCheck="item.cancelResizeCheck"
               :resizeDelay="item.resizeDelay"
               :changeDelay="item.changeDelay"
               :setOptionOpts="item.setOptionOpts"
               :notSetUnchange="item.notSetUnchange"
               :remote="item.remote"
               :url="item.url"
               :params="item.params"
      ></x-chart>
    </template>
  </div>
</template>

<script>
import XChart from '../chart'
export default {
  name: 'XChartBoxes',
  components: {
    [XChart.name]: XChart
  },
  props: {
    minWidth: {
      type: String,
      default: 'auto'
    },
    minHeight: {
      type: String,
      default: '200px'
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
      internalItems: this.items
    }
  },
  methods: {
    setProps (id, field, fieldData) {
      this.internalItems.forEach(function (item) {
        if (item.id === id) {
          item[field] = fieldData
        }
      })
    },
    addItem (item) {
      if (item && item.id) {
        this.internalItems.push(item)
      }
    },
    removeItem (item) {
      if (item && item.id) {
        let index
        this.internalItems.forEach(function (_item, _index) {
          if (_item.id === item.id) {
            index = _index
          }
        })
        if (index !== undefined) {
          this.internalItems.splice(index, 1)
        }
      }
    },
    toggleItem (item, addOrRemove) {
      if (addOrRemove) {
        this.addItem(item)
      } else {
        this.removeItem(item)
      }
    },
    cleanAll () {
      this.internalItems = []
    },
    reloadDataAllHandler (others) {
      const vm = this
      this.internalItems.forEach(function (item) {
        vm.$refs[item.id][0].loadDataHandler(others)
      })
    }
  },
  watch: {}
}
</script>

<style scoped>
  .x-chart-boxes-container {
    width: 100%;
    height: 100%;
    overflow: auto;
  }
</style>
