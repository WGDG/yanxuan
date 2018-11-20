<template>
<div class="whole-price">

  <whole-price>
    <div slot="header" class="slot">
      <router-link to="/" class="fanhui"><span class="FontFamily i-fanhui"></span></router-link>
      <span >砍价列表<span class="FontFamily i-arrow-right"></span></span>
    </div>
  </whole-price>
</div>
</template>

<script>
  import WholePrice from '../components/index/wholePrice'
    export default {
        components:{
          WholePrice
        }
    }
</script>

<style lang>
  .whole-price{
    background: #fff;
  }
  .whole-price:before{
    display: table;
    content: '';
  }
  .i-fanhui{
    float: left;
    font-size: rem(55);
  }
</style>
