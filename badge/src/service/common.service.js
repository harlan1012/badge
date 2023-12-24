import axios from 'axios'

// 获取商品信息
export function getGoodList(params = {}, config = {}) {
  return axios.get('/api/revenue/good/list/new', {
    params: params,
    headers: {
      ...config,
    },
  })
}
export function getUserInfo(params = {}, config = {}) {
  return axios.get('/revenue/userinfo', {
    params: params,
    headers: {
      ...config,
      'params-style': 'encrypt',
    },
  })
}
