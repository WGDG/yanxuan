<template>
  <div class="detail-shopping">
    <ul class="detail-shopping-top">
      <router-link :to="{ name: 'introduction' }" tag="li">商品介绍</router-link>
      <router-link :to="{ name: 'reviews' }" tag="li">商品评价</router-link>
    </ul>
    <div class="detail-shopping-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>

</style>
