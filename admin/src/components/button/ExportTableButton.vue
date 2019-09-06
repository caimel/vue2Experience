<template>
  <click-button :type="type"
                :icon="icon"
                :loading="loading"
                :disabled="disabled"
                :plain="plain"
                :round="round"
                :circle="circle"
                :size="size"
                :label="$label ? $t($label) : label"
                :tooltip-disabled="tooltipDisabled"
                :tooltip-content="$t(tooltipContent)"
                :tooltip-placement="tooltipPlacement"
                :tooltip-effect="tooltipEffect"
                @click="click"></click-button>
</template>

<script>
import xlsx from 'xlsx'
import moment from 'moment'
export default {
  name: 'ExportTableButton',
  props: {
    tooltipDisabled: {
      type: Boolean,
      default: true
    },
    tooltipContent: String,
    tooltipPlacement: String,
    tooltipEffect: String,
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    icon: {
      type: String,
      default: ''
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    label: {
      type: String,
      default: ''
    },
    $label: String,
    export: Object
  },
  data () {
    return {
      config: this.export
    }
  },
  methods: {
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
    setExportConfig (config) {
      this.config = config
    },
    click () {
      const workBook = xlsx.utils.book_new()
      this.config.sheets.forEach((sheet) => {
        const data = []
        sheet.data.forEach(row => {
          const _row = {}
          sheet.header.key.forEach(k => {
            // 扁平化
            _row[k] = this._getValueByPath(row, k)
          })
          data.push(_row)
        })

        const workSheet = xlsx.utils.json_to_sheet(data, { header: sheet.header.key, skipHeader: false })
        xlsx.utils.book_append_sheet(workBook, workSheet, sheet.name)
        const range = xlsx.utils.decode_range(workSheet['!ref'])
        for (let i = range.s.c; i <= range.e.c; ++i) {
          const index = xlsx.utils.encode_col(i) + '1' // 处理列标题映射
          if (!workSheet[index]) continue
          workSheet[index].v = sheet.header.labels[workSheet[index].v] || workSheet[index].v
        }
      })
      const output = this.config.output + moment().format('YYYY-MM-DD_HHmmss') + '.xlsx'
      xlsx.writeFile(workBook, output)
    }
  }
}
</script>

<style scoped>

</style>
