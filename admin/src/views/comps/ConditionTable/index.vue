<template>
    <x-panel :items="LAYOUT">
      <template slot="main">
        <el-dialog :visible.sync="FILTER_DIALOG_VISIBLE">
          <span slot="title" class="el-dialog__title"><i class="el-icon-search"></i></span>
          <x-form ref="filterForm" label-width="100px" size="mini" :model="params" :rules="formRules" :items="formItems"></x-form>
          <div slot="footer">
            <!--<el-button size="mini" @click="ADD_DIALOG_VISIBLE = false">Cancel</el-button>-->
            <el-button type="primary" size="mini" @click="onSubmit">{{$t('form.Filter')}}</el-button>
          </div>
        </el-dialog>
        <x-toolbar :ref="toolbar[0].id" :children="toolbar[0].children"
                   @click#refresh="onSubmit"
                   @click#search="openFilterDialog"></x-toolbar>
        <div :style="{ height: 'calc(100% - ' + useHeight+'px)' }">
          <x-table ref="table"
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
                   @columns-change="table_columns_change">
          </x-table>
        </div>
      </template>
    </x-panel>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'index',
  props: {
    query: Object,
    formItems: Array,
    formRules: Object,
    table: Object
  },
  data: function () {
    return {
      toolbar: [
        {
          id: 'top_toolbar',
          children: [
            { id: 'search', widget: 'click', size: 'mini', position: 'right', label: '', type: 'primary', icon: 'el-icon-search', tooltipDisabled: false, tooltipContent: 'Filter', tooltipPlacement: 'bottom', tooltipEffect: 'dark' },
            { id: 'checks', widget: 'checks', size: 'mini', position: 'right', props: {'label': 'label', '$label': '$label', 'value': 'visible'}, tooltipDisabled: false, tooltipContent: 'Columns_Select', tooltipPlacement: 'bottom', tooltipEffect: 'dark' }
          ]
        }
      ],
      params: this.query || {},
      LAYOUT: [
        {
          'style': {'flex': 1},
          'equally': true,
          'cols': [{'span': 24, 'slot': 'main'}]
        }
      ],
      TABLE_DATA: [],
      FILTER_DIALOG_VISIBLE: true
    }
  },
  computed: {
    ...mapGetters(['currentInstance']),
    useHeight: function () {
      let height = 0
      height += 35
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
        Object.assign(params, vm.params)
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
    openFilterDialog () {
      this.FILTER_DIALOG_VISIBLE = true
    },
    onSubmit () {
      this.$refs['filterForm'].validate((valid) => {
        if (valid) {
          this.load_data()
          this.FILTER_DIALOG_VISIBLE = false
        }
      })
    }
  },
  mounted () {
    this.$nextTick(() => {})
  },
  watch: {
    currentInstance (val) {
      this.load_data()
    }
  }
}
</script>
