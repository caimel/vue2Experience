<template>
  <div class="tabs-view-container" v-show="tabs.length>0">
    <div style="display:block; padding: 10px 10px 10px 0">
      <el-breadcrumb separator="〉" >
        <el-breadcrumb-item> {{parentRoute.meta.label}}</el-breadcrumb-item>
        <transition-group name="breadcrumb">
          <el-breadcrumb-item v-for="(breadcrumb)  in breadcrumbs[value]" :key="breadcrumb.label" :to="{path:'/'}">
            {{breadcrumb.label}}<template v-if="breadcrumb.query.id">[{{breadcrumb.query.id}}]</template>
          </el-breadcrumb-item>
        </transition-group>
      </el-breadcrumb>
    </div>
    <el-tabs :type="type" :value="value" :closable="closable" :addable="addable" :editable="editable" :tabPosition="tabPosition" :stretch="stretch"
             @tab-click="_tabClick"
             @tab-remove="_tabRemove"
             @tab-add="() => emitEventHandler('tab-add')"
             @edit="(targetName, action) => emitEventHandler('edit', targetName, action)">
      <el-tab-pane v-for="(tab) in tabs" :key="tab.name"
                   :name="tab.name" :label="tab.label" :label-content="tab.labelContent"
                   :closable="tab.closable" :disabled="tab.disabled" :lazy="tab.lazy">
        <!--<router-multi-view :view-name="viewName" morph="transition-group" class="main-view-container" />-->
        <router-view :key="key"/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import ElTabs from 'element-ui/lib/tabs'
import ELTabPane from 'element-ui/lib/tab-pane'
export default {
  name: 'NestedTabsView',
  components: {
    [ElTabs.name]: ElTabs,
    [ELTabPane.name]: ELTabPane
  },
  props: {
    cachedViews: Array,
    tabPosition: {
      type: String,
      default: 'top'
    },
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
    }
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
      breadcrumbs: {},
      currentGroup: '',
      testBreadcrumbs: [
        {label: 'index1'},
        {label: 'index2'},
        {label: 'index3'}
      ]
    }
  },
  computed: {
    key: function () {
      return this.$route.fullpath
    }
  },
  beforeCreate () {
    this.parent = this.$route.name
    this.parentRoute = this.$route
  },
  methods: {
    emitEventHandler (event) {
      this.$emit(event, ...Array.from(arguments).slice(1))
    },
    _tabAdd (tab) {
      this.tabs.push(tab)
      this.emitEventHandler('tabs-change', this.tabs)
    },
    _tabRemove: function (removeTabName) {
      let route = {}
      let CurrentTabName = this.value
      // 移除的是当前的Tab
      if (CurrentTabName === removeTabName) {
        this.tabs.forEach((tab, index) => {
          if (tab.name === removeTabName) {
            let nextTab = this.tabs[index + 1] || this.tabs[index - 1]
            if (nextTab) {
              // this.value = nextTab.name
              CurrentTabName = nextTab.name
              route = nextTab.route
              this.$router.push({path: route.path, query: route.query, params: route.params})
            }
          }
        })
      }
      this.tabs = this.tabs.filter(tab => tab.name !== removeTabName)
      this.emitEventHandler('tabs-change', this.tabs)
    },
    _tabClick (tabComponent) {
      let route = {}
      this.tabs.forEach(function (tab) {
        if (tabComponent.name === tab.name) {
          route = tab.route
        }
      })
      this.$router.push({path: route.path, query: route.query, params: route.params})
    },
    _filter: function () {
      const route = this.$route
      let names = route.matched.map(item => item.name)
      if (names && names[names.length - 2] !== this.parent) {
        return false
      }
      if (this.depth) { // depth 匹配
        let matched = route.matched.filter(item => item.name)
        if (matched.length !== this.depth) {
          return false
        }
      }
      if (this.selector.length > 0) {
        const selector = route.meta.selector
        if (!selector) return false
        switch (typeof selector) {
          case 'string':
            break
          case 'object':
            if (selector instanceof Array) {
              let intersectionSet = this.selector.filter(v => selector.includes(v))
              return intersectionSet.length > 0
            }
            break
        }
      }
      return true
    },
    getTabs () {
      return this.tabs
    }
  },
  watch: {
    $route: function (val) {
      if (!this._filter()) return
      let exist = false
      let CurrentTabName = ''
      const label = val.meta.label
      if (val.params && val.params.group) {
        const group = val.params.group
        CurrentTabName = group
        this.tabs = this.tabs.filter(tab => tab.name !== group) // 移除group显示区域
        this.breadcrumbs[CurrentTabName].push({label: label, path: val.path + '/' + group, query: val.query})
      } else {
        let matched = val.matched.map(item => item.name)
        CurrentTabName = matched[matched.length - 1]
        this.breadcrumbs[CurrentTabName] = [{label: label, path: val.path, query: val.query}]
      }
      this.currentGroup = CurrentTabName
      this.tabs.forEach(function (tab) {
        if (tab.name === CurrentTabName) {
          tab.label = val.meta.label
          tab.route = val // 更新路由
          exist = true // 不创建新的tab
          // this.$router.push({path: val.path, query: val.query, params: val.params})
        }
      })
      if (!exist) {
        this._tabAdd({label: val.meta.label, name: CurrentTabName, route: val})
      }
      this.value = CurrentTabName
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
  .el-tabs{
    height: calc(100% - 32px);
    /*height: 100%*/
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
