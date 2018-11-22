<template>
  <div class="box box-dingdan">
    <div class="dingdan-header">
      <slot-header>

        <!--<router-link :to="{ path: '/personal' }" class="FontFamily i-fanhui"></router-link>-->
        <span slot="headers">订单列表</span>
      </slot-header>
      <ul class="header-tap">
        <li>待付款</li>
        <li>待发货</li>
        <li>待收货</li>
        <li @click="pingjia">待评价</li>
        <li>已完成</li>
      </ul>
    </div>
    <scroller>
        <div class="goodsMap" v-for="(item, index) in goodsMap" :key="index">
            <div class="goodsMap-list" v-for="(i, k) in item" :key="k">
              <router-link :to="{ name: 'pingjiaDetail', params: { id: i.orderId } }">
              <div class="goodsMap-img">
                <img :src="i.pic" alt="">
              </div>
              <div class="goodsMap-title">
                <p>{{ i.goodsName }}</p>
                <p class="shopping-now">
                  <span>{{ i.property }}</span>
                  <span>
                  <span>共{{ i.number }}件商品</span>
                  <span>实付款{{ i.number * i.amount }}</span>
                </span>
                </p>
              </div>
              </router-link>
            </div>

        </div>
    </scroller>

  </div>

</template>

<script>
import SlotHeader from '../components/header/headers'
import Axios from 'axios'
export default {
  data() {
    return {
      goodsMap: [],
      orderList: [],
      pingjiaList: [],
      listId: []
    }
  },
  components: {
    SlotHeader
  },
  created() {
    let usertoken = JSON.parse(window.localStorage.getItem('usertoken'))
    let {token, uid} = usertoken
    Axios.post(global.globalData.api + '/order/list?token=' + token).then(res => {
      console.log(res);
      let { data } = res.data
      let { goodsMap, orderList } = data
      this.goodsMap = goodsMap
      this.orderList = orderList
    })
  },
  methods: {
    pingjia() {
      let ii = ''
      for (let i in this.goodsMap) {
        this.listId = i
      }

      let pingjia = this.orderList.filter(item => {
        return item.statusStr == '待评价'
      })
      this.pingjiaList = pingjia
    }
  }
}
</script>

<style scoped>

</style>
