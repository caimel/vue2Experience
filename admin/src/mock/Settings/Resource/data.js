import Mock from 'mockjs'
import { param2Obj } from '@/utils/param2Obj'

let list = []
export default {
  list: config => {
    // const { max } = param2Obj(config.url)
    let template = {}
    template[`list|5`] = [
      {
        'id|+1': 1,
        'name': '@FIRST',
        'type|1': ['Page', 'Table', 'Form', 'Button'],
        'parent': '',
        'uri': '@URL("http")',
        'enabled': '@BOOLEAN(1,9,false)'
      }
    ]
    if (list.length === 0) {
      list = Mock.mock(template).list
    }
    return list
  },
  get: config => {
    const { id } = param2Obj(config.url)
    let rowData
    list.forEach(function (row) {
      if (row.id === parseInt(id)) {
        rowData = row
      }
    })
    return rowData
  },
  post: config => {
    return ''
  },
  put: config => {
    return ''
  },
  select: config => {
    let l = []
    list.forEach(function (item) {
      l.push({value: item.id, label: item.name})
    })
    return l
  }
}
