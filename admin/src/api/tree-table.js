import request from '@/utils/request'

export function meta (query) {
  return request({
    url: '/treeTable/meta',
    method: 'get',
    params: query
  })
}
export function list (query) {
  return request({
    url: '/treeTable',
    method: 'get',
    params: query
  })
}

export function treeMeta (query) {
  return request({
    url: '/tree/meta',
    method: 'get',
    params: query
  })
}

export function treeData (query) {
  return request({
    url: '/tree',
    method: 'get',
    params: query
  })
}
