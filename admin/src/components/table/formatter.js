import moment from 'moment'
import sqlFormatter from 'sql-formatter'
const formatters = {
  timestampToDate: function (row, column, cellValue, index) {
    if (row[column.prop] === -1) return '-' //
    return moment(row[column.prop] * 1000).format('YYYY-MM-DD HH:mm')
  },
  sql: function (row, column, cellValue, index) {
    return sqlFormatter.format(row[column.prop])
  }
}

export default formatters
