<template>
  <drilldown-tabs-view ref="drilldownTabsView" :mainViewHeight="height[0]" :tabsViewHeight="height[1]" @tab_length_change="collapse_change">
    <!--<iframe v-if="helpSrc" slot="view" :src="'./static/help/' + language + '/'+ helpSrc"></iframe>-->
    <template>
      <x-toolbar v-if="toolbar[0]" :ref="toolbar[0].id" remote :children="toolbar[0].children" :url="toolbar[0].url"
                 @expired#auto_refresh="load_data" @click#refresh="load_data" @emit-event#enlarge="enlargeHandler"></x-toolbar>
      <div :style="{ height: 'calc(100% - ' + useHeight+'px)' }">
        <x-table ref="table"
                 :id="table.id || 'export-html-table'"
                 :show-select-checkbox="table.showSelectCheckbox"
                 :column-switch="table.columnSwitch"
                 load-columns :columns-url="table.columns.url" :data="TABLE_DATA"
                 :expand="table.expand"
                 :show-pagination="table.pagination.enable"
                 :layout="table.pagination.layout"
                 :height-fit="table.heightFit"
                 v-on="listeners"
                 @page-size-change="load_data"
                 @current-page-change="load_data"
                 @row-click="table_row_click"
                 @confirm-success#terminateSession="load_data"
                 @columns-change="table_columns_change"
                 @data-change="table_data_change">
        </x-table>
      </div>
      <x-toolbar v-if="toolbar[1]" :ref="toolbar[1].id" remote :children="toolbar[1].children" :url="toolbar[1].url"
                 @emit-event="drillDownHandler"></x-toolbar>
    </template>
  </drilldown-tabs-view>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'index',
  props: {
    height: {
      type: Array,
      default: function () {
        return ['50%', '50%']
      }
    },
    helpSrc: String,
    query: Object,
    toolbar: {
      type: Array,
      default: function () {
        return []
      }
    },
    table: Object
  },
  data: function () {
    return {
      TABLE_DATA: [],
      collapseStatus: 'dis_icons'
    }
  },
  computed: {
    ...mapGetters(['currentInstance', 'language']),
    useHeight: function () {
      let height = 0
      if (this.toolbar) {
        height += 35 * this.toolbar.length
      }
      return height
    },
    listeners: function () {
      const listeners = {}
      const events = this.table.refreshEvents || []
      events.forEach(item => {
        listeners[item] = event => {
          this.load_data()
        }
      })
      return listeners
    }
  },
  methods: {
    emitEventHandler (event) {
      this.$emit(event, ...Array.from(arguments).slice(1))
    },
    enlargeHandler (...s) {
      this.$refs['drilldownTabsView'].handleHeaderTop()
    },
    _setParamsToToolBar (row) {
      const vm = this
      if (vm.toolbar) {
        vm.toolbar.forEach(item => {
          if (item.id) {
            vm.$refs[item.id].broadcast(row)
          }
        })
      }
    },
    load_data () {
      const vm = this
      vm._setParamsToToolBar({})
      if (vm.table['url']) {
        const params = {}
        if (vm.table.pagination.enable) {
          const pagination = vm.$refs['table'].getPagination()
          params.offset = (pagination.currentPage - 1) * pagination.pageSize
          params.pageSize = pagination.pageSize
        }
        Object.assign(params, vm.table.params)
        Object.assign(params, vm.query)
        const loading = vm.$loading({fullscreen: false, lock: true, text: 'Loading', spinner: 'el-icon-loading', background: 'rgba(0, 0, 0, 0.7)'})
        vm.$refs['table'].setData([])
        vm.$axios.get(vm.table['url'], {params: params})
          .then((response) => {
            const data = response.data
            if (data.data) {
              if (data.data.items) {
                vm.$refs['table'].setData(response.data.data.items)
                if (vm.table.pagination.enable) {
                  vm.$refs['table'].setTotal(response.data.data.count)
                }
              }
              if (data.code === 0) vm.$message({ type: 'warning', message: data.msg })
            }
          }).catch(err => {
            console.error(err)
            // vm.$message({ type: 'error', message: err })
          }).finally(() => {
            loading.close()
          })
      }
    },
    table_row_click (row, event, column) {
      this._setParamsToToolBar(row)
    },
    table_columns_change (columns) {
      if (this.toolbar && this.toolbar[0] && this.toolbar[0].id) {
        this.$refs[this.toolbar[0].id].trigger('checks', 'setChecks', columns)
      }
    },
    table_data_change: function (data, columns) {
      if (this.toolbar && this.toolbar[0] && this.toolbar[0].id) {
        const header = {
          key: [],
          labels: {}
        }
        columns.forEach(column => {
          header.key.push(column.prop)
          header.labels[column.prop] = column.$label ? this.$t(column.$label) : column.label
        })
        const _export = this.table.export || {}
        const config = {
          output: _export.output || 'export.xlsx',
          sheets: [
            {
              name: 'sheet1',
              header: header,
              data: data,
              options: _export.options
            }
          ]
        }
        this.$refs[this.toolbar[0].id].trigger('exportTable', 'setExportConfig', config)
      }
    },
    drillDownHandler: function (id, args, query) {
      const props = {query: query}
      Object.assign(props, args.props)
      this.$refs['drilldownTabsView'].Add_Tab({label: args.label, $label: args.$label, component: args.component, props: props})
    },
    collapse_change (instance) {
      const activeNames = instance.activeNames
      const tabs = instance.tabs
      // 设置上折叠板3种状态
      if (activeNames.indexOf('1') === -1) {
        return
      } else {
        if (tabs.length === 0) {
          this.collapseStatus = 'dis_icons'
        } else if (activeNames.length === 2 && tabs.length > 0) {
          this.collapseStatus = 'enl_icons'
        } else if (activeNames.length === 1 && tabs.length > 0) {
          this.collapseStatus = 'zoom_icons'
        }
      }
      if (this.toolbar && this.toolbar[0] && this.toolbar[0].id) {
        if (this.$refs[this.toolbar[0].id]) {
          this.$refs[this.toolbar[0].id].trigger('enlarge', 'setIcon', this.collapseStatus)
        }
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.load_data()
    })
    if (this.toolbar && this.toolbar[0] && this.toolbar[0].id) {
      if (this.$refs[this.toolbar[0].id]) {
        this.$refs[this.toolbar[0].id].trigger('enlarge', 'setIcon', this.collapseStatus)
      }
    }
  },
  watch: {
    currentInstance (val) {
      this.load_data()
    }
  }
}
</script>
