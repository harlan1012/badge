<template>
  <div class="good-items">
    <div v-for="(item, index) in list" :key="index" class="good-item">
      <div class="good-item_image">
        <img :src="item.image" class="img" alt="" />
      </div>
      <div class="good-item_info">
        <div class="good-item_title">
          {{ item.name }}
        </div>
        <div class="good-item_amount">￥{{ item.amount }} 原价:￥{{ item.originalAmount }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      default() {
        return []
      },
    },
  },
}
</script>

<style scoped lang="less">
.good-items {
  .good-item {
    position: relative;
    display: flex;
    align-items: center;
    padding: 24px;
    margin-bottom: 24px;
    background: #ddd;

    .good-item_image {
      width: 260px;
      padding-right: 24px;
    }

    .good-item_info {
      .good-item_title {
        font-weight: bold;
      }

      .good-item_amount {
        color: #f00;
      }
    }
  }
}
</style>
