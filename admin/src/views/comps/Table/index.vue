<template>
    <x-panel :items="LAYOUT">
      <template slot="main">
        <x-toolbar v-if="toolbar[0]"
                   :ref="toolbar[0].id"
                   v-bind="toolbar[0]"
                   @expired#auto_refresh="load_data"
                   @component-link#add="load_data"
                   @click#refresh="load_data"></x-toolbar>
        <div :style="{ height: 'calc(100% - ' + useHeight+'px)' }">
          <x-table ref="table"
                   :id="table.id || 'export-html-table'"
                   v-bind="table"
                   v-on="listeners"
                   @page-size-change="load_data"
                   @current-page-change="load_data"
                   @row-click="table_row_click"
                   @columns-change="table_columns_change"
                   @data-change="table_data_change">
            <span slot="pagination">
              <el-button-group>
                <el-button type="text" class="el-icon-refresh" @click="load_data"></el-button>
                <!--<el-button type="text" class="el-icon-menu"></el-button>-->
                <!--<el-button type="text" class="el-icon-printer"></el-button>-->
              </el-button-group>
            </span>
          </x-table>
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
    table: Object
  },
  data () {
    return {
      LAYOUT: [{'style': {'flex': 1}, 'equally': true, 'cols': [{'span': 24, 'slot': 'main'}]}]
    }
  },
  computed: {
    ...mapGetters(['system']),
    useHeight: function () {
      let height = 0
      if (this.toolbar) {
        height += 35 * this.toolbar.length
      }
      return height
    },
    listeners: function () {
      const listeners = {}
      const events = this.table.events || []
      events.forEach(item => {
        if (item.action === 'refresh') {
          listeners[item.name] = event => {
            this.load_data()
          }
        }
      })
      return listeners
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
        if (vm.table.pagination) {
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
            if (data) {
              vm.$refs['table'].setData(data.data || [])
              if (vm.table.pagination) {
                vm.$refs['table'].setTotal(data.pagination.total || 0)
              }
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
      /*
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
      */
    },
    drillDownHandler: function (id, args, query) {
      const props = {query: query}
      Object.assign(props, args.props)
      this.emitEventHandler('tab-add', {label: args.label, $label: args.$label, component: args.component, props: props})
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.load_data()
    })
  },
  watch: {}
}
</script>
