<template>
    <div class="detail-header">
      <swiper class="swiper-container" :options="swiperOption" ref="mySwiper" v-if="picList.length>1">
        <swiper-slide class="swiper-slide" v-for="item,index in picList" :key="index">
            <img :src='item.pic' alt="">
        </swiper-slide>
        <!--分页器 -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="detail-introduce">
        <h3>{{ basicInfo.name }}</h3>
        <p>{{ basicInfo.characteristic }}</p>
        <div class="detail-money">
          <p>
            <span class="detail-now">￥{{ basicInfo.kanjiaPrice }}</span>
            <span class="detail-old">￥{{ basicInfo.originalPrice }}</span>
          </p>
          <p>已售{{ basicInfo.commission }}件</p>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'carrousel',
  data(){
    return{
      picList: [],
      basicInfo: {},
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
  created(){
    let { picsList } = this.$store.state
    let { basicInfo } = this.$store.state
    this.picList = picsList
    this.basicInfo = basicInfo
  }
}
</script>

<style scoped>

</style>
