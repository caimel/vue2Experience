<template>
  <div class="page-container">
    <div :style="mainViewStyle">
      <slot></slot>
    </div>
    <nested-tabs-view :style="tabsViewStyle" :view-name="viewName" :depth="depth" :min-depth="2" :selector="selector" show-breadcrumb/>
  </div>
</template>
<script>
import ElBreadcrumb from 'element-ui/lib/breadcrumb'
import ElBreadcrumbItem from 'element-ui/lib/breadcrumb-item'
export default {
  name: 'DropdownTabsView',
  components: {
    [ElBreadcrumb.name]: ElBreadcrumb,
    [ElBreadcrumbItem.name]: ElBreadcrumbItem
  },
  props: {
    viewName: {
      type: String,
      default: 'default'
    },
    depth: Number,
    minDepth: Number,
    selector: {
      type: Array,
      default: function () {
        return []
      }
    },
    mainViewHeight: {
      type: [Number, String],
      default: 60
    },
    tabsViewHeight: [Number, String]
  },
  data () {
    return {
      internalMainHeight: this.mainViewHeight
    }
  },
  computed: {
    mainViewStyle () {
      if (typeof this.mainViewHeight === 'string') {
        return {height: this.mainViewHeight}
      }
      if (typeof this.mainViewHeight === 'number') {
        return {height: this.mainViewHeight + 'px'}
      }
    },
    tabsViewStyle () {
      if (this.tabsViewHeight) {
        if (typeof this.tabsViewHeight === 'string') {
          return {height: this.tabsViewHeight}
        }
        if (typeof this.tabsViewHeight === 'number') {
          return {height: this.tabsViewHeight + 'px'}
        }
      }
      return {height: 0}
    }
  },
  methods: {}
}
</script>

<style scoped>
.page-container{
  height: 100%;
  width: 100%;
  overflow: auto;
}
</style>
