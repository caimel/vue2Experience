<template>
  <div class="tabs-view-container" v-show="tabs.length>0">
    <el-tabs :type="type" :value="value" :closable="closable" :addable="addable" :editable="editable" :tabPosition="tabPosition" :stretch="stretch"
             @tab-click="tabClick"
             @tab-remove="tabRemove"
             @tab-add="() => emitEventHandler('tab-add')"
             @edit="(targetName, action) => emitEventHandler('edit', targetName, action)">
      <el-tab-pane v-for="(tab) in tabs" :key="tab.name"
                   :name="tab.name" :label="tab.label" :label-content="tab.labelContent"
                   :closable="tab.closable" :disabled="tab.disabled" :lazy="tab.lazy">
        <!--<router-multi-view :view-name="viewName" morph="transition-group" class="main-view-container" />-->
        <router-view :key="$route.fullpath"/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import ElTabs from 'element-ui/lib/tabs'
import ELTabPane from 'element-ui/lib/tab-pane'
export default {
  name: 'TabsView',
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
    maxDepth: Number,
    selector: {
      type: Array,
      default: function () {
        return []
      }
    },
    showBreadcrumb: Boolean
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
      routeCache: {}
    }
  },
  computed: {
    key () {
      return this.$route.fullPath
    }
  },
  methods: {
    emitEventHandler (event) {
      this.$emit(event, ...Array.from(arguments).slice(1))
    },
    addTab (tab) {
      this.tabs.push(tab)
    },
    tabRemove: function (removeTabName) {
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
    },
    tabClick (tabComponent) {
      let route = {}
      this.tabs.forEach(function (tab) {
        if (tabComponent.name === tab.name) {
          route = tab.route
        }
      })
      this.$router.push({path: route.path, query: route.query, params: route.params})
    },
    filter: function () {
      const route = this.$route
      let matched = route.matched.filter(item => item.name)
      if (this.depth) { // depth 匹配
        if (matched.length !== this.depth) {
          return false
        }
      } else if (this.maxDepth) {
        if (matched.length > this.maxDepth) {
          return false
        }
      } else if (this.minDepth) {
        if (matched.length < this.minDepth) {
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
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler: function (val) {
        if (!this.filter()) return
        let exist = false
        // // const params = val.params
        let matched = val.matched.map(item => item.name)
        const CurrentTabName = matched[matched.length - 1]
        this.tabs.forEach(function (tab) {
          if (tab.name === CurrentTabName) {
            tab.route = val // 更新路由
            exist = true
            // this.$router.push({path: val.path, query: val.query, params: val.params})
          }
        })
        if (!exist) {
          this.addTab({label: val.meta.label, name: CurrentTabName, route: val})
        }
        this.value = CurrentTabName
      }
    }
  }
}
</script>

<style scoped>
  .main-view-container {
    height: 100%;
    width: 100%;
  }
  .tabs-view-container {
    /*padding-left: 10px;*/
    /*padding-right: 10px;*/
    height: 100%;
  }
  .el-tabs{
    height: 100%;
  }
</style>
<style>
  /*.el-tabs__content{*/
    /*height: calc(100% - 60px);*/
    /*background-color: #F2F7F8;*/
  /*}*/
  .el-tab-pane{
    height: 100%;
  }
  /*.el-tabs--border-card>.el-tabs__content {*/
    /*padding: 0;*/
  /*}*/
</style>
