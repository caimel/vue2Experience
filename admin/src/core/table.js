import '@/utils/array'

const columnFunc = {
  display: function (field, column) {
    if (field.display === false) {
      column.hidden = true
    }
  },
  propertyName: function (field, column) {
    column.prop = field.propertyName
  },
  locale: function (field, column) {
    column.label = field.locale
  },
  sortable: function (field, column) {
    if (field.sortable === true) column.sortable = true
  }
}

const ingoreProps = ['constraints', 'editable', 'flex', 'widget', 'type']
//  解析表格Columns约束
export function parseColumns (fields) {
  const columns = []
  fields.forEach(function (field) {
    const column = {}
    for (var key in field) {
      if (ingoreProps.contain(key)) continue
      if (typeof columnFunc[key] === 'function') {
        columnFunc[key](field, column)
      } else {
        console.warn(`The prop [${key}] is not supported `)
      }
    }
    columns.push(column)
  })
  return columns
}
