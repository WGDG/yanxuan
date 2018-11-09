<template>
  <div id="isroll-container">
    <div class="wrapper">
      <div class="choice-shopping swiper-slide" v-for="(item, index) in specialList" :key="index">
        <img :src="item.pic" alt="">
        <div class="specialList-img"></div>
      </div>
    </div>
  </div>
</template>

<script>
import IScroll from 'iscroll'
export default {
  data(){
    return{
      specialList:[]
    }
  },
  computed(){
    new IScroll ('#isroll-container',{
      scrollX: true,
      scrollY: false
    })
    let { specialList } = this.$store.state
    return specialList
  }
}
</script>

<style scoped>

</style>
