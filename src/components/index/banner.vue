<template>
  <swiper class="swiper-container" :options="swiperOption" ref="mySwiper" v-if="bannerList.length>1">
      <swiper-slide class="swiper-slide" v-for="item,index in bannerList" :key="index">
        <router-link :to=" { name: 'detail' } ">
          <img :src='item.picUrl' alt="">
        </router-link>
      </swiper-slide>
      <!--分页器 -->
      <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import '../../assets/css/index/banner.scss'
import Axios from 'axios'
export default {
  name: 'carrousel',
  data(){
    return{
      bannerList:[],
      swiperOption: {
        autoplay: {
          delay: 3000,
          autoplayDisableOnInteraction: false,
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        },
        paginationClickable:true,
        mousewheelControl: true,
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted(){
    console.log(global.globalData.api);
    Axios.get(global.globalData.api+'/banner/list').then(res => {
      let { data } = res.data
      this.bannerList = data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
