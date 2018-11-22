<template>
    <div class="shopping-cart-content">
      <scroller>
        <div>
          <div class="cart-list">
            <p class="null-cart" v-if="list == []">
              你的购物车是空的！
            </p>
            <div class="shopping-list" >

              <div class="shopping-item" v-for="(item,index) in list" :key="index">
                <span class="FontFamily i-xuanzhong" :class="{'active':checkedAll == true, 'actived': item.checked == checke}" @click="checked(index)"></span>
                <div class="shopping-item-img">
                  <img :src="item.pic" alt="">
                </div>
                <ul class="shopping-name">
                  <li>{{ item.name }}</li>
                  <li class="shopping-name-button">
                    <span>￥{{ item.originalPrice }}</span>
                    <div class="number">
                      <button @click="decrement(index)" :disabled="item.num == 1">-</button>
                      <div class="numbers" v-model="num">{{ item.num }}</div>
                      <button @click="increment(index)">+</button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="lovely">
            <div class="lovely-top">猜你喜欢</div>
            <div class="lovely-list">
              <dl v-for="(item, index) in loveList" :key="index">
                <router-link :to="{ name: 'detail', params: { id: item.id } }">
                  <dt>
                    <img :src="item.pic" alt="">
                  </dt>
                  <dd>
                    <p>{{ item.name }}</p>
                    <p>
                      <span>￥{{ item.originalPrice }}</span>
                      <span>已售{{ item.views }}件</span>
                    </p>
                  </dd>
                </router-link>
              </dl>
            </div>
          </div>
        </div>
      </scroller>
    </div>
</template>

<script>
  import Axios from 'axios'
  import qs from 'qs'
export default {
   data(){
     return {
       loveList: []
     }
   },
  computed: {
    list() {
      console.log(this.$store.getters.getStorage);
      return this.$store.getters.getStorage
      //return JSON.parse(window.localStorage.getItem('shoppingList'))
      //return this.$store.state.shoppingList
    },
    num() {
      return this.$store.state.num
    },
    checkedAll() {
      return this.$store.state.checkAll
    },
    checke(){
      console.log(this.$store.state.checked);
      return this.$store.state.checked
    }
  },
  methods: {
    decrement(index){
      this.$store.commit('decrementShoppingCart',index)
    },
    increment(index){
      // let { num } = this.list[index]
      // num ++
      // this.list[index].num = num
      this.$store.commit('incrementShoppingCart',index)
    },
    checked(index){
      this.$store.commit('checked', index)
    }
  },
  created() {
    this.$store.commit('list', this.list)
    Axios.get(global.globalData.api + '/shop/goods/list').then(res => {
      // console.log(res);
      let { data } = res.data
      let list = data.filter(item => {
        return item.recommendStatusStr === '普通'
      })
      this.$store.commit('basicInfo', list)
      this.loveList = list
    })
    // let shoppingList = JSON.parse(window.localStorage.getItem('shoppingList'))
    // let token = 'dcb9f8f9-35ca-440d-b66a-ebe0bee13932'
    // Axios.post('/api/order/create?token=' + token + '&goodsJsonStr=' + qs.stringify(shoppingList)).then(res => {
    //   console.log(res);
    // })
  }
}
</script>

<style scoped>

</style>
