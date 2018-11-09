<template>
    <div class="personal-my">
      <ul>
        <li>
          <span class="FontFamily i-wodeyue"></span>
          <div>我的余额</div>
          <span class="money">0元</span>
        </li>
        <li>
          <span class="FontFamily i-wodekanjia"></span>
          <div>我的砍价</div>
        </li>
        <li>
          <span class="FontFamily i-liquan"></span>
          <div>我的礼券</div>
        </li>
        <li>
          <span class="FontFamily i-shoucang"></span>
          <div>我的收藏</div>
        </li>
        <li>
          <span class="FontFamily i-wodedizhi"></span>
          <div><router-link :to="{ name: 'address' }">我的地址</router-link></div>
        </li>
        <li>
          <span class="FontFamily i-lianxikefu"></span>
          <div>联系客服</div>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "personal-top"
    }
</script>

<style scoped>

</style>
