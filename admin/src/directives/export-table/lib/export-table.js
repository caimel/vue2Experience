'use strict'

import xlsx from 'xlsx'
// const letters = [
//   'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
//   'AA', 'AB', 'AC', 'AD', 'AE', 'AF', 'AG', 'AH', 'AI', 'AJ', 'AK', 'AL', 'AM', 'AN', 'AO', 'AP', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AV', 'AW', 'AX', 'AY', 'AZ'
// ]

const sheetDataFilters = [
  {
    filter: function (sheet) {
      const refs = sheet['!ref'].split('')
      const lastColumnHeaderIndex = refs[3] + '1'
      const lastColumnHeader = sheet[lastColumnHeaderIndex]
      if (lastColumnHeader.v === 'Operations' || lastColumnHeader.v === '操作') {
        for (let i = 1; i <= parseInt(refs[4]); i++) {
          sheet[refs['3'] + i].v = ''
        }
      }
    }
  }
]
const ExportHtmlTable = {
  directiveName: 'export-html-table',
  bind: function bind (el, binding, vnode) {
    el.addEventListener('click', function (event) {
      const selector = binding.value['selector'] || '#export-html-table'
      let table = (document.querySelector(selector + ' .el-table') || document.querySelector(selector)).cloneNode(true)
      const fixed = table.querySelector('.el-table__fixed') || table.querySelector('.el-table__fixed-right') // el-table__fixed
      if (fixed) table = table.removeChild(fixed) // element-ui el-table 中使用fixed 固定列时，实现上是使用了两个tablei标签
      let box = xlsx.utils.table_to_book(table)
      Object.keys(box.Sheets).forEach(key => {
        const sheet = box.Sheets[key]
        sheetDataFilters.forEach(filter => {
          filter.filter(sheet)
        })
      })
      const filename = binding.value['filename'] || binding.value['selector'] ? binding.value['selector'] + '.xlsx' : 'export-html-table.xlsx'
      xlsx.writeFile(box, filename)
    })
  },
  update: function update (el, binding) {},
  unbind: function unbind (el) {}
}

export default ExportHtmlTable
