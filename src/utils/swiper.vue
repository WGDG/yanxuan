<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="../assets/images/6_01.gif" alt="">1</div>
      <div class="swiper-slide"><img src="../assets/images/6_01.gif" alt="">2</div>
      <div class="swiper-slide"><img src="../assets/images/6_01.gif" alt="">3</div>
      <div class="swiper-slide"><img src="../assets/images/6_01.gif" alt="">3</div>
    </div>
    <!--分页器 -->
    <div class="swiper-pagination"></div>
  </div>
  <!--<div class="aa">-->

  <!--</div>-->
</template>

<script>
  import Swiper from 'swiper';
  export default {
    mounted(){
      new Swiper ('.swiper-container', {
        autoplay: {
          delay: 1800
        },
        loop: true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets'
        }
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .swiper-container{
    width: 100%;
    height: 14.963rem;
    position: relative;
    img{
      width: 100%;
    }
    .swiper-pagination{
      position: absolute;
      bottom: 1px;
    }
  }
  .swiper-pagination .swiper-pagination-bullet{
    width: 6px;
    height: 3px;
    display: inline-block;
    margin-left: 0px !important;
    margin: 0 2px 0 1px;
    border-radius: 3px;
    background: #9d9d9d;
  }
  .swiper-pagination .swiper-pagination-bullet-active{
    width: 10px;
    background: #fff;
  }
</style>
