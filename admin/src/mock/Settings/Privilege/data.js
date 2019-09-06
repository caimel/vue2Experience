// import Mock from 'mockjs'
import { param2Obj } from '@/utils/param2Obj'
let map = {}
export default {
  get: config => {
    const { roleId } = param2Obj(config.url)
    let rowData = map[roleId]
    if (!rowData) rowData = {roleId: roleId, privileges: []}
    return rowData
  },
  put: config => {
    const rowData = JSON.parse(config.body)
    map[rowData.roleId] = rowData
    return ''
  }
}
