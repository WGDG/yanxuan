<template>
    <div class="box">
      <slot-header>
        <span slot="headers">订单详情</span>
      </slot-header>
      <scroller>
        <div class="dingdan-detail">
          <div class="goodsMap" v-for="(item, index) in goods" :key="index">
            <router-link :to="{ name: 'detail', params: { id: item.goodsId } }">
              <div class="goodsMap-list">
                <div class="goodsMap-img">
                  <img :src="item.pic" alt="">
                </div>
                <div class="goodsMap-title">
                  <p>{{ item.goodsName }}</p>
                  <p class="shopping-now">
                 <span>
                   <span>数量: {{ item.number }}</span>
                   <span>规格：{{ item.property }}</span>
                 </span>
                    <span class="pingjia-button">
                   <span>￥{{ item.number * item.amount }}</span>
                   <el-row>
                     <el-button round >再次购买</el-button>
                     <router-link :to="{ name: 'pingjia', params: { orderId: item.orderId, id: item.id } }">
                       <el-button type="danger" round v-if="orderInfo.statusStr == '待评价'">评价晒单</el-button>
                     </router-link>
                   </el-row>
                 </span>
                  </p>
                </div>
              </div>
            </router-link>

          </div>
          <el-collapse v-model="activeName" accordion>
            <el-collapse-item title="展示完整信息" name="1">
              <div>订单编号：{{ orderInfo.orderNumber }}</div>
              <div>下单时间：{{ orderInfo.dateAdd }}</div>
              <div>支付方式：{{ orderInfo.remark }}</div>
              <div>支付时间：{{ orderInfo.dateUpdate }}</div>
            </el-collapse-item>
          </el-collapse>
          <div class="pinglunConent">

          </div>
        </div>
      </scroller>
    </div>
</template>

<script>
import SlotHeader from './header/headers'
import Axios from 'axios'
export default {
  data() {
    return{
      goods: [],
      orderInfo: [],
      activeName: '1'
    }
  },
  components: {
    SlotHeader
  },
  created() {
    let usertoken = JSON.parse(window.localStorage.getItem('usertoken'))
    let {token, uid} = usertoken
    let { id } = this.$route.params
    Axios.post(global.globalData.api + '/order/detail?token=' + token + '&id=' + id).then(res => {
      console.log(res);
      let { goods, orderInfo } = res.data.data
      this.goods = goods
      console.log(this.goods);
      this.orderInfo = orderInfo
    })


  },
  methods: {

  }
}
</script>

<style scoped>

</style>
