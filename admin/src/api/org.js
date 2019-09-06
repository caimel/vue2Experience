import request from '@/utils/request'

export function meta (query) {
  return request({
    url: '/org/meta',
    method: 'get',
    params: query
  })
}
export function list (query) {
  return request({
    url: '/org',
    method: 'get',
    params: query
  })
}
