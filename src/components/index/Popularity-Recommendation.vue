<template>
    <div class="pop-recommend">
      <dl class="pop-recommend-header">
        <dd>人气推荐<span class="FontFamily i-arrow-right"></span></dd>
      </dl>
      <div class="pop-recommend-warp">
        <router-link :to="{ name:'detail', params: {id: item.id  } }" v-for="(item, index) in goodsList" :key="index">
          <dl class="pop-recommend-item" >
            <dt>
              <img :src="item.pic" alt="">
            </dt>
            <dd class="suggest">
              <p>{{ item.name }}</p>
              <p>{{ item.characteristic }}</p>
              <h4>{{ item.originalPrice }}</h4>
            </dd>
          </dl>
        </router-link>

      </div>

    </div>
</template>

<script>
import '../../assets/css/index/Popularity-Recommendation.scss'
import Axios from 'axios'
export default {
   data(){
     return {
      goodsList: []
     }
   },
  created(){

    //console.log(global.globalData.Api);
    Axios.get(global.globalData.api + '/shop/goods/list').then( res => {
      let { data } = res.data
      let list = data.filter(item => {
        return item.recommendStatusStr === '推荐'
      })
      this.goodsList = list
    })
   }
}

</script>

<style scoped>

</style>
