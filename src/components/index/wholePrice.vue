<template>
    <div class="price">
      <dl class="price-header">
        <dd ><slot name="header"><router-link :to=" { name: 'pricelist' } ">全民砍价<span class="FontFamily i-arrow-right"></span></router-link></slot></dd>
      </dl>
      <router-link :to="{ name: 'detail', params: { id: item.id} }"  v-for="(item, index) in wholeList" :key="index">
        <dl class="price-shopping">
          <dt>
            <img :src="item.pic" alt="">
          </dt>
          <dd class="suggest">
            <h3>{{ item.name }}</h3>
            <p>{{ item.characteristic  }}</p>
            <ul class="cost">
              <li>
                <div>{{ item.kanjiaPrice }}</div>
                <div>底价</div>
              </li>
              <li>
                <div>{{ item.originalPrice }}</div>
                <div>原价</div>
              </li>
              <li>
                <div>{{ item.commission }}件</div>
                <div>限量</div>
              </li>
            </ul>
          </dd>
        </dl>
      </router-link>

    </div>
</template>

<script>
import '../../assets/css/index/wholePrice.scss'
import Axios from 'axios'
export default {
  data(){
    return{
      wholeList: []
    }
  },
  created(){
    Axios.get('https://api.it120.cc/small4/shop/goods/list').then( res => {
      let { data } = res.data
      let list = data.filter(item => {
        return item.kanjia === true
      })
      this.wholeList = list
    })
  }
}
</script>

<style scoped>

</style>
