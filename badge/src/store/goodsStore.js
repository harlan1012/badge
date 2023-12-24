import { defineStore } from 'pinia'
import { getGoodList } from '@/service/common.service.js'

export const goodsStore = defineStore('goodsStore', {
  state: () => {
    return {
      list: [],
    }
  },
  actions: {
    async getList(params) {
      let result = await getGoodList(params)
      this.list = result.data
    },
  },
})
