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
  computed:{
    specialList(){
      return this.$store.state.specialList
    }
  },
  mounted(){
    new IScroll ('#isroll-container',{
      scrollX: true,
      scrollY: false
    })
  }
}
</script>

<style scoped>

</style>
