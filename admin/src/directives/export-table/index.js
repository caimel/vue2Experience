import ExportHtmlTable from './lib/export-table.js'
ExportHtmlTable.install = function (Vue) {
  Vue.directive('export-html-table', ExportHtmlTable)
}

export default ExportHtmlTable
