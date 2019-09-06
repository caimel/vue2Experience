<template>
  <div>
    <div v-show="tabs.length === 0" style="height: 100%">
        <slot name="view"></slot>
    </div>
    <el-tabs v-show="!defaultHide || tabs.length>0" :style="{height: 'calc(100% - 5px)'}" :type="type" :value="value" :closable="closable" :addable="addable" :editable="editable" :tabPosition="tabPosition" :stretch="stretch"
                 @tab-remove="_tabRemove"
                 @edit="(targetName, action) => emitEventHandler('edit', targetName, action)">
      <el-tab-pane v-for="(tab) in tabs" :key="tab.name"
                   :name="tab.name" :label="tab.$label ? $t(tab.$label) : tab.label" :label-content="tab.labelContent"
                   :closable="tab.closable" :disabled="tab.disabled" :lazy="tab.lazy">
        <component :is="tab.component" v-bind="tab.props"
                   @component-link ="() => emitEventHandler('component-link')"
                   @tab-add ="Add_Tab"></component>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
/**
 * 每个tab 嵌入一个component
 *
 */
import ElTabs from 'element-ui/lib/tabs'
import ELTabPane from 'element-ui/lib/tab-pane'
export default {
  name: 'XComponentLinkTabs',
  components: {
    [ElTabs.name]: ElTabs,
    [ELTabPane.name]: ELTabPane
  },
  props: {
    tabPosition: {
      type: String,
      default: 'top'
    },
    // 当tabs.length = 0  时隐藏
    defaultHide: {
      type: Boolean,
      default: true
    },
    height: String
  },
  data () {
    return {
      value: '',
      type: 'border-card',
      closable: true,
      addable: false,
      editable: false,
      stretch: false,
      tabs: [],
      tabIndex: 1
    }
  },
  computed: {},
  methods: {
    emitEventHandler (event) {
      this.$emit(event, ...Array.from(arguments).slice(1))
    },
    _tabRemove: function (removeTabName) {
      // 移除的是当前的Tab
      if (this.value === removeTabName) {
        this.tabs.forEach((tab, index) => {
          if (tab.name === removeTabName) {
            let nextTab = this.tabs[index + 1] || this.tabs[index - 1]
            if (nextTab) {
              this.value = nextTab.name
            }
          }
        })
      }
      this.tabs = this.tabs.filter(tab => tab.name !== removeTabName)
      this.emitEventHandler('tabs-change', this.tabs)
    },
    Add_Tab (tab) {
      const _tab = {label: tab.label, $label: tab.$label, name: this.tabIndex.toString(), component: tab.component, props: tab.props}
      this.tabIndex += 1
      this.tabs.push(_tab)
      this.value = _tab.name // 定位到当前tab
      // this.emitEventHandler('tabs-change', this.tabs)
    }
  }
}
</script>

<style scoped>
  .tabs-view-container {
    /*padding-left: 10px;*/
    /*padding-right: 10px;*/
    height: 100%;
  }
</style>
<style>
  .el-tabs__content{
    height: calc(100% - 40px);
  }
  .el-tab-pane{
    height: 100%;
  }
</style>
