<template>
    <x-panel :items="LAYOUT">
      <template slot="main">
        <x-toolbar v-if="toolbar[0]" :ref="toolbar[0].id" remote :children="toolbar[0].children" :url="toolbar[0].url"
                   @emit-event#enlarge="() => emitEventHandler('enlarge')" @expired#auto_refresh="load_data" @click#refresh="load_data"></x-toolbar>
        <div :style="{ height: 'calc(100% - ' + useHeight+'px)', backgroundColor: '#FFFFFF', overflow: 'auto' }">
          <div v-show="headerHtml" class="header" v-html="headerHtml"></div>
          <div>
             <x-table ref="table"
                   :id="table.id || 'export-html-table'"
                   :show-select-checkbox="table.showSelectCheckbox"
                   :column-switch="table.columnSwitch"
                   :columns="columnsHead" :data="TABLE_DATA"
                   :expand="table.expand"
                   :show-pagination="table.pagination.enable"
                   :layout="table.pagination.layout"
                   :height-fit="table.heightFit"
                   v-on="listeners"
                   @page-size-change="load_data"
                   @current-page-change="load_data"
                   @row-click="table_row_click"
                   @component-link#remark="load_data"
                   @confirm-success#terminateSession="load_data"
                   @columns-change="table_columns_change"
                   @data-change="table_data_change">
          </x-table>
          </div>
        </div>
        <x-toolbar v-if="toolbar[1]" :ref="toolbar[1].id" remote :children="toolbar[1].children" :url="toolbar[1].url" @emit-event="drillDownHandler"></x-toolbar>
      </template>
    </x-panel>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'index',
  props: {
    query: Object,
    toolbar: {
      type: Array,
      default: function () {
        return []
      }
    },
    table: Object,
    instance: Array
  },
  data () {
    return {
      LAYOUT: [{'style': {'flex': 1}, 'equally': true, 'cols': [{'span': 24, 'slot': 'main'}]}],
      TABLE_DATA: [],
      AllColumnsHeads: [],
      headerHtml: '',
      collapseStatus: 'enl_icons',
      activeNames: [1, 2]
    }
  },
  computed: {
    ...mapGetters(['currentInstance']),
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
    },
    columnsHead: function () {
      let result = []
      const columns_head = this.AllColumnsHeads
      columns_head.forEach(head => {
        this.table.columns.data.forEach(_head => {
          if (head === _head.prop) {
            result.push(_head)
          }
        })
      })
      return result
    }
  },
  methods: {
    emitEventHandler (event) {
      this.$emit(event, ...Array.from(arguments).slice(1))
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
        const loading = vm.$loading({lock: true, text: 'Loading', spinner: 'el-icon-loading', background: 'rgba(0, 0, 0, 0.7)'})
        vm.$refs['table'].setData([])
        vm.$axios.get(vm.table['url'], {params: params})
          .then((response) => {
            const data = response.data
            if (data.data) {
              if (data.data.head) {
                vm.AllColumnsHeads = data.data.head
              }
              if (data.data.header) {
                vm.headerHtml = data.data.header
              }
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
      this.emitEventHandler('tab-add', {label: args.label, $label: args.$label, component: args.component, props: props})
    },
    collapse_change () {
      // 设置折叠板2种状态
      if (this.activeNames.indexOf('2') === -1) {
        return
      } else {
        if (this.activeNames.length === 2) {
          this.collapseStatus = 'enl_icons'
        } else if (this.activeNames.length === 1) {
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
    },
    'instance': {
      immediate: false,
      handler: function (val) {
        this.activeNames = val
        this.collapse_change()
      }
    }
  }
}
</script>
<style>
  .header {
    padding-bottom: 10px;
    padding-top: 10px;
    /*padding-left: 10px;*/
    color: #606266;
    font-size: 12px;
  }
  .header .HEADER_HTML table {
    width: 100%;
    color: #606266;
    font-size: 12px;
  }
  .header .HEADER_HTML tr {
    padding: 5px 0;
  }
  .header .HEADER_HTML td {
    rowspan: 2;
    valign: top;
    height: 10px;
  }
  .header .HEADER_HTML tbody {
    font-weight: 500;
    text-align: -webkit-left;
  }
</style>
