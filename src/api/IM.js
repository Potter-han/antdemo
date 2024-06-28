import request from '@/utils/requestIM'
const header = {
  'Content-Type': 'application/json'
}

/**
 * 注册环信
 * @param {*} data 
 * @returns 
 */
export const register = (username, password) => {
  return request({
    url: 'user',
    method: 'post',
    data: {
      username,
      password
    },
    header
  })
}

/**
 * 获取环信token
 * @param {*} data 
 * @returns 
 */
export const getIMToken = (username, password) => {
  return request({
    url: 'token',
    method: 'post',
    data: {
      grant_type: 'password',
      username,
      password
    },
    header
  })
}

/**
 * 获取环信管理员token
 * @returns {*}
 */
export const getAdminToken = () => {
  return request({
    url: 'token',
    method: 'post',
    data: {
      grant_type: 'client_credentials',
      client_id: import.meta.env.VITE_IM_CLIENT_ID,
      client_secret: import.meta.env.VITE_IM_CLIENT_SECRET
    },
    header
  })
}

/**
 * 获取用户列表
 * @returns {*}
 */
export const getUserList = () => {
  return request({
    url: 'users',
    params: {
      limit: 100
    }
  })
}