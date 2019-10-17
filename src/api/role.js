import request from '@/utils/request'

export function getRoleList(params) {
  return request({
    // 请求后端的url地址
    url: '/api/roles/',
    method: 'get',
    // parms一些参数如/api/users/?page=2, page=2就是从parms传进来的
    params
  })
}

export function getRole(roleId) {
  return request({
    // 请求后端的url地址
    url: `/api/roles/${roleId}/`,
    method: 'get'
  })
}

export function modfiyRole(id, data) {
  return request({
    // 请求后端的url地址
    url: `/api/roles/${id}/`,
    method: 'patch',
    data
  })
}

export function addRole(data) {
  return request({
    // 请求后端的url地址
    url: `/api/roles/`,
    method: 'post',
    data
  })
}

export function deleteRoles(id) {
  return request({
    // 删除用户
    url: `/api/roles/${id}/`,
    method: 'delete'
  })
}
