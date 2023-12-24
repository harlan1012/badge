<template>
  <div class="home">
    <div class="home-img">
      <img src="@/assets/logo.png" class="img" alt="" />
    </div>
    <div>
      用户名:{{userInfo.nickname}}
    </div>
    <div>
      用户电话:{{userInfo.phone}}
    </div>
    <div>
      用户年级:{{userInfo.schoolYear}}
    </div>
    <OIButton style="margin: 10px auto;" @click="goDetail">点击 进入商品列表页</OIButton>
  </div>
</template>
<script>
import { userStore } from '@/store/userStore'
import { mapState } from 'pinia'
import { openH5WithNewWebview } from '@guanghe-pub/onion-utils'
export default {
  computed: {
    ...mapState(userStore, ['userInfo', 'getUserInfo']),
  },
  mounted () {
    this.init()
  },
  methods: {
    async init () {
      await this.getUserInfo()
    },
    goDetail () {
      let url = `${window.location.origin}${import.meta.env.BASE_URL}good`
      // 浏览器里跳转
      window.location.href = url
      // APP内跳转
      // openH5WithNewWebview(url)
    },
  },
}
</script>
<style lang="less">
.home {
  position: relative;
  margin: auto 32px;

  .home-title {
    padding: 24px 0;
    font-weight: bold;
    color: #f00;
    text-align: center;
  }

  .home-items {
    .home-item {
      display: flex;
      justify-content: space-between;
      padding: 32px;
      border-bottom: 1px solid #ddd;
    }
  }
}
</style>
