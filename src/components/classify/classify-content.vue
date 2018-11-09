<template>
    <div class="ify-content">
      <ul class="ify-content-left" >
        <li @click="all">所有分类</li>
        <li v-for="(item, index) in listName" :key="index">
          <span @click="live" v-if="item.type === 'jujia'">{{ item.name }}</span>
          <span @click='peishi' v-if="item.type == 'peishi'">{{ item.name }}</span>
          <span @click="fuzhuang" v-if="item.type == 'fuzhuang'">{{ item.name }}</span>
          <span @click="dianqi" v-if="item.type == 'dianqi'">{{ item.name }}</span>
        </li>
      </ul>
      <div class="ify-content-right">
        <scroller >
          <div>
            <div class="ify-banner">
              <banner></banner>
            </div>
            <ul class="ify-classify">
              <li v-for="(item,index) in goodsList" :key="index">
                <div class="ify-image">
                  <img :src="item.icon" alt="">
                </div>
                <p>{{ item.name }}</p>
              </li>
            </ul>
          </div>
        </scroller>
      </div>
    </div>
</template>

<script>
import Banner from '../index/banner'
import Axios from 'axios'
export default {
  data() {
    return{
      goodsList: [],
      listName: [],
    }
  },
  components: {
    Banner
  },
  mounted() {
    Axios.post('https://api.it120.cc/small4/shop/goods/category/all').then( res => {
      let { data } = res.data
      this.goodsList = data
      let list = data.filter(item => {
        return item.level === 1
      })
      this.listName = list
    })
  },

  methods: {
    // 所有分类
    all(){
      Axios.post('https://api.it120.cc/small4/shop/goods/category/all').then( res => {
        let { data } = res.data
        this.goodsList = data
      })
    },
    live() {
      Axios.post('https://api.it120.cc/small4/shop/goods/category/all').then( res => {
        let { data } = res.data
        let list = data.filter(item => {
          return item.type === 'jujia2'
        })
        this.goodsList = list
      })
    },
    peishi(){
      Axios.post('https://api.it120.cc/small4/shop/goods/category/all').then( res => {
        let { data } = res.data
        let list = data.filter(item => {
          return item.type === 'peishi2'
        })
        this.goodsList = list
      })
    },
    fuzhuang(){
      Axios.post('https://api.it120.cc/small4/shop/goods/category/all').then( res => {
        let { data } = res.data
        let list = data.filter(item => {
          return item.type === 'fuzhuang2'
        })
        this.goodsList = list
      })
    },
    dianqi(){
      Axios.post('https://api.it120.cc/small4/shop/goods/category/all').then( res => {
        let { data } = res.data
        let list = data.filter(item => {
          return item.type === 'dianqi2'
        })
        this.goodsList = list
      })
    }
  }

}
</script>

<style scoped>

</style>
