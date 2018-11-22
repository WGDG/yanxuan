<template>
    <div class="personal-orders">
        <div class="personal-orders-top">
          <div class="orders-top-left">
            <span class="FontFamily i-wodedingdan"></span>
            <span>我的订单</span>
          </div>
          <router-link :to="{ path: '/dingdanliebiao' }">
            <span class="FontFamily i-arrow-right1"></span>
          </router-link>

        </div>
        <div class="personal-orders-wait">
          <ul>
            <router-link :to="{ name: 'dingdanliebiao' }" tag="li">
              <span class="FontFamily i-daifukuan"></span>
              <div>待付款</div>
            </router-link>
            <router-link :to="{ name: 'dingdanliebiao' }" tag="li">
              <span class="FontFamily i-daifahuo"></span>
              <div>待发货</div>
            </router-link>
            <router-link :to="{ name: 'dingdanliebiao' }" tag="li">
              <span class="FontFamily i-daishouhuo"></span>
              <div>待收货</div>
            </router-link>
            <router-link :to="{ name: 'dingdanliebiao' }" tag="li">
              <span class="FontFamily i-daipingjia"></span>
              <div>待评价</div>
            </router-link>
          </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "personal-top"
    }
</script>

<style scoped>

</style>
