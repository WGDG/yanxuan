<template>
  <div class="choice">
    <dl class="choice-header">
      <dd><router-link :to="{ name: 'strict' }">精选专题<span class="FontFamily i-arrow-right"></span></router-link></dd>
    </dl>
    <div class="isroll-container">
      <div class="wrapper wrape">
        <dl class="ch-shopping swiper-slide" v-for="(item, index) in specialList" :key="index">
          <dt class="ch-box">
            <div class="image-box"><img :src="item.pic" alt=""></div>
          </dt>
          <dd class="sug">
            <p class="descript">{{ item.descript }}</p>
            <p class="title">{{ item.title }}</p>
          </dd>
        </dl>
      </div>
    </div>
  </div>

</template>

<script>
import IScroll from 'iscroll'
import Axios from 'axios'
export default {
  data() {
    return {
      specialList: []
    }
  },
  mounted(){
    new IScroll ('.isroll-container',{
      scrollX: true,
      scrollY: false
    }),
    Axios.get('https://api.it120.cc/small4/cms/news/list').then(res => {
      let { data } = res.data
      this.specialList = data
      this.$store.commit('specialList', this.specialList)
    })
  },

}
</script>

<style scoped>

</style>
