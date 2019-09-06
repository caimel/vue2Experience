import request from '@/utils/request'

export function meta (query) {
  return request({
    url: '/employee/meta',
    method: 'get',
    params: query
  })
}
export function list (query) {
  return request({
    url: '/employee',
    method: 'get',
    params: query
  })
}

export function create (params) {
  return request({
    url: '/employee',
    method: 'post',
    params: params
  })
}
export function update (params) {
  return request({
    url: '/employee',
    method: 'put',
    params: params
  })
}

export function detail (params) {
  return request({
    url: '/employee',
    method: 'get',
    params: params
  })
}
export function del (params) {
  return request({
    url: '/employee',
    method: 'delete',
    params: params
  })
}
