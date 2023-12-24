import axios from 'axios'
import {
  axiosInterceptors,
  getHost,
  getQueryObject,
  browserShowToast,
  appLogout,
  utilsGlobal,
} from '@guanghe-pub/onion-utils'

export const host = getHost(import.meta.env.MODE === 'test' ? 'development' : import.meta.env.MODE)
const { api } = host
axios.defaults.baseURL = api

const query = getQueryObject()

axiosInterceptors({
  axios,
  urlQuery: {
    ...query,
    channel: query['client-channel'] || query.clientChannel || query.channel,
    token:
      query['token'] ||
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNzFiYTA3MzBmZTlmMDAwMWQ3NDRjMSIsInNuIjoiIiwicm9sZSI6InN0dWRlbnQiLCJleHRyYSI6IiIsImV4cGlyZXNJbiI6IjFkIiwiYXVkIjoidXNlciIsImV4cCI6MTY2NjM0NzcwMSwianRpIjoiNzFmNDZlYTUtNjI0YS00MzhlLWJhMjYtYTRkMmI2N2MyMTM5IiwiaWF0IjoxNjY2MjYxMzAxLCJpc3MiOiJ0b2tlbi1zZXJ2ZXIiLCJzdWIiOiI1ZjcxYmEwNzMwZmU5ZjAwMDFkNzQ0YzEifQ.CjWTNUk69LG1G0rbQcaWh6eRGECNVWTVXbF9Zm51ScI',
  },
  errorMsgCallBack: (msg) => browserShowToast(msg),
  loginInvalidCallBack: () => appLogout(),
})

utilsGlobal.set('axios', axios)
export function axiosInstance(config) {
  return axios(config)
}
