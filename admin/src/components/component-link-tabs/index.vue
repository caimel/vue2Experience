<template>
  <fragment>
    <div v-show="tabs.length === 0" style="height: 100%">
        <slot name="view"></slot>
    </div>
    <el-tabs v-show="!defaultHide || tabs.length>0" :style="{height: 'calc(100% - 5px)'}" :type="type" :value="value" :closable="closable" :addable="addable" :editable="editable" :tabPosition="tabPosition" :stretch="stretch"
                 @tab-remove="_tabRemove"
                 @tab-click="clickTabs"
                 @edit="(targetName, action) => emitEventHandler('edit', targetName, action)">
      <el-tab-pane v-for="(tab) in tabs" :key="tab.name"
                   :name="tab.name" :label="tab.$label ? $t(tab.$label) : tab.label" :label-content="tab.labelContent"
                   :closable="tab.closable" :disabled="tab.disabled" :lazy="tab.lazy">
        <component :instance="instance" :is="tab.component" v-bind="tab.props"
                   @enlarge="() => emitEventHandler('enlarge')"
                   @component-link ="() => emitEventHandler('component-link')"
                   @expired="() => emitEventHandler('expired')"
                   @tab-add ="Add_Tab"></component>
      </el-tab-pane>
    </el-tabs>
  </fragment>
</template>

<script>
/**
 * 每个tab 嵌入一个component
 *
 */
import ElTabs from 'element-ui/lib/tabs'
import ELTabPane from 'element-ui/lib/tab-pane'
import EmitEventButton from '../button/EmitEventButton'
import Emitter from '../mixins/emitter'
export default {
  name: 'ComponentLinkTabs',
  components: {
    [EmitEventButton.name]: EmitEventButton,
    [ElTabs.name]: ElTabs,
    [ELTabPane.name]: ELTabPane
  },
  mixins: [Emitter],
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
    height: String,
    instance: Array
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
      this.clickTabs()
    },
    clickTabs: function (tab) {
      if (tab) {
        this.value = tab.name
      }
      this.broadcast('ReapeatCountDownTimerButton', 'change-tab')
    },
    enlargeHandler (...s) {
      // this.emitEventHandler('emitEvent')
      // console.log(this.$parent)
      this.$refs.collapseItem2.handleHeaderClick2()
    }
  },
  watch: {
    tabs: {
      immediate: true,
      handler: function (val) {
        this.$emit('input', val)
      }
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
