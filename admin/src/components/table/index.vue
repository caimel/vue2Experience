<template>
  <div class="x-table-container">
    <div class="x-table-wrapper" v-resize:debounce.50="onResize">
      <el-table :ref="ref"
                :key='key'
                :data="internalData"
                :border="border"
                :stripe="stripe"
                :height="internalHeight"
                :max-height="internalMaxHeight"
                :fit="fit"
                :size="size"
                :show-header="showHeader"
                :header-row-style="headerRowStyle"
                :header-cell-style="headerCellStyle"
                :highlight-current-row="highlightCurrentRow"
                :current-row-key="currentRowKey"
                :row-class-name="rowClassName"
                :row-style="rowStyle"
                :row-ket="rowKey"
                :empty-text="emptyText"
                :default-expand-all="defaultExpandAll"
                :expand-row-keys="expandRowKeys"
                :default-sort="defaultSort"
                :tooltip-effect="tooltipEffect"
                :show-summary="showSummary"
                :sum-text="sumText"
                :summary-method="summaryMethod"
                @select="select"
                @select-all="(selection) => emitEventHandler('select-all', selection)"
                @selection-change="selection => emitEventHandler('selection-change', selection)"
                @cell-mouse-enter="(row, column, cell, event) => emitEventHandler('cell-mouse-enter', row, column, cell, event)"
                @cell-mouse-leave="(row, column, cell, event) => emitEventHandler('cell-mouse-leave', row, column, cell, event)"
                @cell-click="(row, column, cell, event) => emitEventHandler('cell-click', row, column, cell, event)"
                @cell-dblclick="(row, column, cell, event) => emitEventHandler('cell-dblclick', row, column, cell, event)"
                @row-click="(row, event, column) => rowClick(row, event, column)"
                @row-dblclick="(row, event) => emitEventHandler('row-dblclick', row, event)"
                @row-contextmenu="(row, event) => emitEventHandler('row-contextmenu', row, event)"
                @header-click="(column, event) => emitEventHandler('header-click', column, event)"
                @sort-change="args => emitEventHandler('sort-change', args)"
                @filter-change="filters => emitEventHandler('filter-change', filters)"
                @current-change="(currentRow, oldCurrentRow) => emitEventHandler('current-change', currentRow, oldCurrentRow)"
                @header-dragend="(newWidth, oldWidth, column, event) => emitEventHandler('header-dragend', newWidth, oldWidth, column, event)"
                @expand-change="(row, expanded) => emitEventHandler('expand-change', row, expanded)">
        <template v-if="selectCheckbox">
          <el-table-column v-if="singleSelect" width="48">
            <template slot-scope="scope">
              <el-checkbox :value=isSelected(scope.row) ></el-checkbox>
            </template>
          </el-table-column>
          <el-table-column v-else type="selection" width="48"></el-table-column>
        </template>
        <el-table-column v-if="indexed" type="index" width="48"></el-table-column>
        <el-table-column v-if="expand.enable" type="expand">
            <template slot-scope="scope">
               <el-form :label-position="expand.labelPosition" :label-width="expand.labelWidth" size="mini" class="table-expand">
                 <el-form-item v-for="(column) in internalColumns"  :key="column.label" v-if="column.widget!== 'operations'" :label="column.expand.$label ? $t(column.expand.$label): column.expand.label||column.$label ? $t(column.$label): column.label" :label-width="column.expand.labelWidth" :style="{width:   column.expand.width}">
                  <template v-if="!column.widget">
                      <span v-if="column.expand.code" style="white-space: pre-line;" v-highlight>
                        <pre><code>{{ column.expand.formatter ? formatters[column.expand.formatter](scope.row, column) : scope.row[column.prop] }}</code></pre>
                      </span>
                      <span v-else style="white-space: pre-line;">
                        <pre>{{ column.expand.formatter ? formatters[column.expand.formatter](scope.row, column) : scope.row[column.prop] }}</pre>
                      </span>
                  </template>
                  <template v-else>
                    <!-- <span> -->
                    <column-render :column="column" :row="scope.row" :emitFunc="emitEventHandler" :funcs="funcs"></column-render>
                    <!-- </span> -->
                  </template>
                </el-form-item>
              </el-form>
            </template>
        </el-table-column>

        <slot name="prepend"/>
        <el-table-column
            v-for="(column) in internalColumns" :key="column.label"
            v-if="column.visible"
            :column-key="column.columnKey"
            :prop="column.prop"
            :label="column.$label ? $t(column.$label): column.label"
            :width="column.minWidth ? '-' : (column.width)"
            :minWidth="column.minWidth || column.width"
            :fixed="column.fixed"
            :render-header="column.renderHeader || renderHeaders.default"
            :sortable="column.sortable"
            :sort-orders="column.sortOrders"
            :sort-method="column.method"
            :resizable="column.resizable"
            :formatter="column.formatter? formatters[column.formatter]: column.formatter"
            :show-overflow-tooltip="column.showOverflowTooltip"
            :align="column.align"
            :header-align="column.headerAlign || column.align"
            :class-name="column.className"
            :label-class-name="column.labelClassName"
            :selectable="column.selectable"
            :reserve-selection="column.reserveSelection"
            :filters="column.filters"
            :filter-placement="column.filterPlacement"
            :filter-multiple="column.filterMultiple"
            :filter-method="column.filterMethod"
            :filtered-value="column.filteredValue">
            <template slot-scope="scope" :scope="newSlotScope ? 'scope' : false ">
              <span v-if="column.filter">
                {{ Vue.filter(column['filter'])(scope.row[column.prop]) }}
              </span>
                <span v-else-if="column.slotName">
                <slot :name="column.slotName" :row="scope.row" :$index="scope.$index"/>
              </span>
                <span v-else-if="column.widget !== undefined ">
                <column-render :column="column" :row="scope.row" :emitFunc="emitEventHandler"></column-render>
              </span>
              <span v-else-if="column.render">
               {{column.render(scope.row)}}
              </span>
              <span v-else-if="column.formatter">
                {{formatters[column.formatter](scope.row, column)}}
              </span>
              <span v-else>
                 {{ _getValueByPath(scope.row,column.prop) }}
              </span>
            </template>
          </el-table-column>
        <slot name="opts"/>
        <el-table-column v-if="columnSwitch" width="55" fixed="right" :render-header="columnSwitchRenderHeader"></el-table-column>
      </el-table>
    </div>
    <div v-if="pagination" class="x-pagination-wrapper">
      <el-pagination
        @size-change="pageSizeChange"
        @current-change="currentPageChange"
        :current-page="internalCurrentPage"
        :page-sizes="internalPageSizes"
        :page-size="internalPageSize"
        :layout="layout"
        :total="total">
        <slot name="pagination"></slot>
      </el-pagination>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import resize from 'vue-resize-directive'
import ElTable from 'element-ui/lib/table'
import ElTableColumn from 'element-ui/lib/table-column'
import ElPagination from 'element-ui/lib/pagination'
import ColumnRender from './column'
import methods from './methods'
import m from '../mixins/methods'
import '../../utils/array'
import formatters from './formatter'
import renderHeaders from './renderHeader'
export default {
  name: 'XTable',
  mixins: [methods, m],
  directives: {
    resize
  },
  components: {
    [ElTable.name]: ElTable,
    [ElTableColumn.name]: ElTableColumn,
    [ElPagination.name]: ElPagination,
    [ColumnRender.name]: ColumnRender
  },
  props: {
    // 由Fetch 函数返回
    data: {
      type: Array,
      default: function () {
        return []
      }
    },

    size: {
      type: String,
      default: 'mini'
    },

    width: [String, Number],

    height: [String, Number],

    maxHeight: [String, Number],

    fit: {
      type: Boolean,
      default: true
    },

    stripe: Boolean,

    border: Boolean,

    rowKey: [String, Function],

    context: {},

    showHeader: {
      type: Boolean,
      default: true
    },

    showSummary: Boolean,

    sumText: String,

    summaryMethod: Function,

    rowClassName: [String, Function],

    rowStyle: [Object, Function],

    cellClassName: [String, Function],

    cellStyle: [Object, Function],

    headerRowClassName: [String, Function],

    headerRowStyle: [Object, Function],

    headerCellClassName: [String, Function],

    headerCellStyle: [Object, Function],

    highlightCurrentRow: {
      type: Boolean,
      default: true
    },

    currentRowKey: [String, Number],

    emptyText: String,

    expandRowKeys: Array,

    defaultExpandAll: Boolean,

    defaultSort: Object,

    tooltipEffect: String,

    spanMethod: Function,

    selectOnIndeterminate: {
      type: Boolean,
      default: true
    },
    selectCheckbox: {
      type: Boolean,
      default: true
    },
    // 单/多选
    singleSelect: {
      type: Boolean,
      default: true
    },
    // 索引列
    indexed: Boolean,
    columnSwitch: Boolean,
    //  TODO : Element UI expand 展开行
    expand: {
      type: Object,
      default: function () {
        return {
          enable: false,
          labelWidth: '120px'
        }
      }
    },

    columns: {
      type: Array,
      default: function () {
        return []
      }
    },
    // 分页
    pagination: {
      type: Boolean,
      default: true
    },

    pageSize: {
      type: Number,
      default: 10
    },

    small: Boolean,

    // total: Number, 由Fetch返回

    pageCount: Number,

    currentPage: {
      type: Number,
      default: 1
    },

    layout: {
      default: 'total, sizes, prev, pager, next, jumper, slot'
    },

    pageSizes: {
      type: Array,
      default () {
        return [10, 20, 30, 40, 50, 100]
      }
    },

    popperClass: String,

    prevText: String,

    nextText: String,

    background: Boolean,

    disabled: Boolean,
    // 是否动态计算页大小
    dynamicComputedPageSize: {
      type: Boolean,
      default: true
    },
    // 动态计算时pageSizes的长度,pageSize 的值为n*pageSize
    dynamicComputedPageSizesLength: {
      type: Number,
      default: 3
    },
    currentPageKey: {
      type: String,
      default: 'currentPage'
    },
    pageSizeKey: {
      type: String,
      default: 'max'
    },
    // 扩展
    autoLoad: {
      type: Boolean,
      default: false
    },
    loadColumns: Boolean,
    columnsUrl: String,
    url: String,

    heightFit: {
      type: Boolean,
      default: true
    },
    funcs: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data () {
    return {
      ref: 'table',
      key: 1,
      loading: undefined,
      internalHeight: this.height,
      internalMaxHeight: this.maxHeight,
      selection: [],
      internalColumns: this.columns,
      internalCurrentPage: this.currentPage,
      internalPageSize: this.pageSize,
      internalPageSizes: this.pageSizes,
      total: 0,
      internalData: [],
      params: {},
      checkList: [],
      formatters: formatters,
      renderHeaders: renderHeaders,
      columnSwitchVisible: false,
      tablesHeight: Number
    }
  },
  created () {
    this.internalColumns.forEach(function (item) {
      if (item.visible === undefined) item.visible = true
      item.expand = item.expand || {}
    })
    if (this.loadColumns) {
      this.loadColumnHandler()
    }
  },
  mounted: function () {
    this.$refs[this.ref].$on('expand', (row, expanded) => this.emitEventHandler('expand', row, expanded))
    this.$nextTick(() => {
      if (this.dynamicComputedPageSize) {
        let tableHeight = this.$refs[this.ref].$el.offsetHeight
        // this.internalHeight = 43 * Math.floor(tableHeight / 43)
        // this.internalMaxHeight = 43 * Math.floor(tableHeight / 43)
        const tableHeaderHeight = this.$refs[this.ref].$refs['headerWrapper'].offsetHeight
        // const tableBody = this.$refs['table'].$refs['bodyWrapper'].offsetHeight
        // Todo 这里可能存在Bug 。初始化时tableBody.offsetHeight = 60 (无数据行)。默认的数据行高和单行headerHeight一样为43 故这里强制设置了rowHeight
        // const tableBodyRowHeight = 51 // 存在button 时 49 ,纯数据43
        const tableBodyRowHeight = 38 // 存在button 时 49 ,纯数据43
        this.internalPageSize = Math.floor((tableHeight - tableHeaderHeight) / tableBodyRowHeight) || 1
        this.internalPageSizes = []
        for (let i = 0; i < this.dynamicComputedPageSizesLength; i++) {
          this.internalPageSizes.push(this.internalPageSize * (i + 1))
        }
        if (this.heightFit) {
          this.internalHeight = tableHeight - 1
          this.internalMaxHeight = tableHeight - 1
        }
      }
      if (this.autoLoad) {
        this.loadDataHandler()
      }
    })
  },
  computed: {
    newSlotScope () {
      return Number(Vue.version.replace(/\./g, '')) >= 250
    },
    useHeight: function () {
      return this.pagination ? 50 : 0
    }
  },
  watch: {
    internalColumns: function (val, oldVal) {
      this.emitEventHandler('columns-change', val)
    },
    elTableOffsetHeight: function (val, oldVal) {
      // this.internalHeight = val
      // this.internalMaxHeight = val
    },
    data: {
      immediate: true,
      handler: function (val) {
        this.internalData = JSON.parse(JSON.stringify(val))
      }
    },
    internalData: {
      immediate: true,
      handler: function (val) {
        this.emitEventHandler('data-change', val, this.internalColumns)
      }
    },
    columns: {
      immediate: true,
      handler: function (val) {
        let _columns = JSON.parse(JSON.stringify(val))
        _columns.forEach(function (item) {
          if (item.visible === undefined) item.visible = true
          item.expand = item.expand || {}
        })
        this.internalColumns = _columns
      }
    },
    tablesHeight: function (val) {
      if (this.dynamicComputedPageSize) {
        const tableHeaderHeight = this.$refs[this.ref].$refs['headerWrapper'].offsetHeight
        // Todo 这里可能存在Bug 。初始化时tableBody.offsetHeight = 60 (无数据行)。默认的数据行高和单行headerHeight一样为43 故这里强制设置了rowHeight
        const tableBodyRowHeight = 38 // 存在button 时 49 ,纯数据43
        this.internalPageSize = Math.floor((val - tableHeaderHeight) / tableBodyRowHeight) || 1
        this.internalCurrentPage = 1
        this.internalPageSizes = []
        for (let i = 0; i < this.dynamicComputedPageSizesLength; i++) {
          this.internalPageSizes.push(this.internalPageSize * (i + 1))
        }
        if (this.heightFit) {
          this.internalHeight = val - 1
          this.internalMaxHeight = val - 1
        }
      }
    }
  },
  methods: {
    emitEventHandler (event) {
      this.$emit(event, ...Array.from(arguments).slice(1))
    },
    _getValueByPath (object, prop) {
      prop = prop || ''
      const paths = prop.split('.')
      let current = object
      let result = null
      for (let i = 0, j = paths.length; i < j; i++) {
        const path = paths[i]
        if (!current) break

        if (i === j - 1) {
          result = current[path]
          break
        }
        current = current[path]
      }
      return result
    },
    columnSwitchRenderHeader: function (h, { column, $index }) {
      const vm = this
      return h('el-dropdown',
        {
          props: { trigger: 'click', hideOnClick: false },
          style: { lineHeight: 1 },
          on: {
            command: (command, instance) => {
              vm.internalColumns[command].visible = !vm.internalColumns[command].visible
            },
            'visible-change': (val) => {
              vm.columnSwitchVisible = val
            }
          }
        },
        [
          h('i', { class: { 'el-icon-caret-bottom': true, 'el-column-switch': true, 'el-column-switch__opend': vm.columnSwitchVisible } }),
          h('el-dropdown-menu', { slot: 'dropdown' },
            this.internalColumns.map((v, index) => {
              const command = index
              return h('el-dropdown-item',
                { props: { command: command } },
                [
                  h('el-checkbox', {
                    props: {
                      value: v.visible
                    },
                    on: {
                      change: function (value, event) {
                        vm.internalColumns[command].visible = !vm.internalColumns[command].visible
                      }
                    }
                  },
                  this.$t(v.$label))
                ])
            })
          )
        ]
      )
      // return h('i', {class: {'el-icon-caret-bottom': true, 'el-column-switch': true}})
    },
    loadColumnHandler () {
      let _params = {}
      this.syncHttpGet(this.columnsUrl, _params, (data, textStatus, jqXHR) => {
        if (data instanceof Array) {
          data.forEach(function (item) {
            if (item.visible === undefined) item.visible = true
            item.expand = item.expand || {}
          })
          this.internalColumns = data
        }
      })
    },
    loadDataHandler: function (others) {
      let _params = {}
      Object.assign(_params, this.params)
      if (others) {
        Object.assign(_params, others)
      }
      if (this.pagination) { // 深度复制分页参数
        // Object.assign(_params, {
        //   currentPage: this.internalCurrentPage,
        //   pageSizeKey: this.internalPageSize
        // })
        _params[this.pageSizeKey] = this.internalPageSize
      }
      this.$axios.get(this.url, 'get', _params).then(response => {
        let result = response
        this.internalData = []
        this.internalData = response instanceof Array ? result : result.data
        if (result.total) {
          this.total = result.total
        } else {
          this.total = this.internalData.length
        }
      })
    },
    select (selection, row) { // selection  选中行  row 动作行
      this.$refs[this.ref].clearSelection()
      this.$refs[this.ref].toggleRowSelection(row, true)
      // this.selection = selection
      this.emitEventHandler('select', selection, row)
    },
    rowClick: function (row, event, column) {
      if (this.singleSelect) {
        this.$refs[this.ref].clearSelection()
        this.selection = [row]
      }
      this.$refs[this.ref].toggleRowSelection(row, true)
      this.emitEventHandler('row-click', row, event, column)
    },
    getSelection () {
      return this.selection
    },
    isSelected (row) {
      return (this.selection || []).indexOf(row) > -1
    },
    pageSizeChange: function (internalPageSize) {
      this.internalPageSize = internalPageSize
      this.emitEventHandler('page-size-change', internalPageSize)
      if (this.autoLoad) this.loadDataHandler()
    },
    currentPageChange (internalCurrentPage) {
      this.internalCurrentPage = internalCurrentPage
      this.emitEventHandler('current-page-change', internalCurrentPage)
      if (this.autoLoad) this.loadDataHandler()
    },
    setParams: function (oldParams, params) {
      if (oldParams.key) {
        delete this.params[oldParams.key]
      }
      if (params.key && params.value) {
        this.params[params.key] = params.value
      }
      this.loadDataHandler()
    },
    setData: function (data) {
      if (!(data instanceof Array)) { Vue.util.warn('TypeError: data is not Array ', this) }
      this.internalData = data
      this.key += 1
    },
    setTotal (total) {
      this.total = total
    },
    getPagination () {
      return {
        currentPage: this.internalCurrentPage,
        pageSize: this.internalPageSize
      }
    },
    onResize (el) {
      // console.log(el.offsetHeight)
      this.tablesHeight = el.offsetHeight
      if (this.heightFit) {
        this.internalHeight = this.tablesHeight - 1
        this.internalMaxHeight = this.tablesHeight - 1
      }
    }
  }
}
</script>

<style scoped>
  .x-table-container {
    width: 100%;
    height: 100%;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    background-color: white;
    overflow: auto;
  }

  .x-toolbar-wrapper {
    /*display: flex;*/
    /*display: -webkit-flex;*/
    /*flex-direction: row;*/
    /*justify-content: space-between;*/
    /*align-items: center;*/
    height: 45px;
    width: 100%;
    padding: 5px 5px 5px 5px;
  }

  .x-table-wrapper {
    flex: 1;
    padding: 0;
    height: 100%;
    overflow: auto;
    /*margin: 5px 5px 5px 5px;*/
  }

  .el-table {
    /*width: 100%;*/
    height: 100%;
    overflow:auto;
  }

  .x-pagination-wrapper {
    display: flex;
    display: -webkit-flex;
    height: 32px;
    margin: 0 5px 0 5px;
    justify-content: flex-end;
    align-items: center;
  }

  .el-table .cell {
    white-space: pre-line;
  }
</style>
<style>
  /*.el-table th{*/
    /*background:#409EFF !important;*/
  /*}*/
  .el-table .row-primary {
    color: #409EFF
  }
  .el-table .row-success {
    color: #67C23A
  }
  .el-table .row-warning {
    color: #E6A23C
  }
  .el-table .row-danger {
    color: #F56C6C
  }
  .el-table .row-info {
    color: #909399
  }
</style>
