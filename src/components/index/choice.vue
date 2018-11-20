<template>
  <div class="choice">
    <dl class="choice-header">
      <dd><router-link :to="{ name: 'strict' }">精选专题<span class="FontFamily i-arrow-right"></span></router-link></dd>
    </dl>
    <div class="isroll-container">
      <div class="wrapper wrape">
        <router-link :to="{ name: 'detailChoice', params: { id:item.id } }" v-for="(item, index) in specialList" :key="index">
          <dl class="ch-shopping swiper-slide" >
            <dt class="ch-box">
              <div class="image-box"><img :src="item.pic" alt=""></div>
            </dt>
            <dd class="sug">
              <p class="descript" v-html="item.descript"></p>
              <p class="title" v-html="item.title"></p>
            </dd>
          </dl>
        </router-link>

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
    Axios.get(global.globalData.api +'/cms/news/list').then(res => {
      let { data } = res.data
      this.specialList = data
      this.$store.commit('specialList', this.specialList)
    })
  },

}
</script>

<style scoped>

</style>
