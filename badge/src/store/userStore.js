import { defineStore } from 'pinia'
import { getUserInfo } from '@/service/common.service.js'

export const userStore = defineStore('userStore', {
  state: () => {
    return {
      userInfo: {},
    }
  },
  actions: {
    async getUserInfo() {
      let result = await getUserInfo()
      this.userInfo = result.data
    },
  },
})
