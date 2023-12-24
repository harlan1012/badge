<template>
  <div class="good">
    <div class="good-title">商品页</div>
    <GoodList :list="list"></GoodList>
  </div>
</template>
<script>
import GoodList from '@com/GoodList/index.vue'
import { mapState, mapActions } from 'pinia'
import { goodsStore } from '@/store/goodsStore'
export default {
  name: 'Good',
  components: {
    GoodList,
  },
  data() {
    return {}
  },
  computed: {
    ...mapState(goodsStore, ['list','setIsOk']),
  },
  mounted() {
    this.getList({
      group: 'app',
      'sku.params.stage': 2,
      'sku.params.subject': 1,
      paymentPlatform: 'ping++',
      'distributionList.vip': 'true',
    })
  },
  methods: {
    ...mapActions(goodsStore, ['getList']),
  },
}
</script>
<style scoped lang="less">
.good {
  .good-title {
    padding: 24px;
    font-weight: bold;
    text-align: center;
  }
}
</style>
