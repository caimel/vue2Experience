import Mock from 'mockjs'
import { param2Obj } from '@/utils/param2Obj'

let list = []
export default {
  list: config => {
    const { max } = param2Obj(config.url)
    let template = {}
    template[`list|${max}`] = [
      {
        'id|+1': 1,
        'firstName': '@FIRST',
        'lastName': '@LAST',
        'department': '',
        'loginName': '@STRING("lower",7)',
        'email': '@EMAIL',
        'cellphone': /^1[385][1-9]\d{8}/,
        'isAdmin': '@BOOLEAN',
        'enabled': '@BOOLEAN(1,9,false)'
      }
    ]
    if (list.length === 0) {
      list = Mock.mock(template).list
    }
    return list
  },
  get: config => {
    console.log(config.url, param2Obj(config.url))
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
    const params = JSON.parse(config.body)
    list.push(params)
    return ''
  },
  put: config => {
    const { id } = param2Obj(config.url)
    const params = JSON.parse(config.body)
    list.forEach(function (row) {
      if (row.id === parseInt(id)) {
        row = params
      }
    })
    return ''
  },
  _delete: config => {
    const { id } = param2Obj(config.url)
    list = list.filter(function (row) {
      return row.id !== parseInt(id)
    })
    return ''
  }
}
