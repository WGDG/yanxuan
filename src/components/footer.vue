<template>
    <div class="footer">
      <ul>
        <li>
          <router-link :to=" { name: 'index' } ">
            <div class="FontFamily i-shouye"></div>
            <div>首页</div>
          </router-link>

        </li>
        <li>
          <router-link :to=" { name: 'classify' } ">
            <div class="FontFamily i-chouti2"></div>
            <div>分类</div>
          </router-link>

        </li>
        <li>
          <router-link :to=" { name: 'shoppingCart' } ">
            <div class="FontFamily i-gouwuchekong"></div>
            <div>购物车</div>
          </router-link>

        </li>
        <li>
          <router-link :to=" { name: 'personal' } ">
            <div class="FontFamily i-nanrenshixing"></div>
            <div>个人</div>
          </router-link>

        </li>
      </ul>
    </div>
</template>

<script>
  import '../assets/css/footer.scss'
    export default {
        name: "footer"
    }
</script>

<style scoped>

</style>
