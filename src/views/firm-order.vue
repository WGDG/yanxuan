<template>
    <div class="box">
      <!--<div class="firm-order-header">-->
        <!--<span class="FontFamily i-fanhui" @click="goBack()"></span>-->
        <!--<p>确认订单</p>-->
      <!--</div>-->
      <SlotHeaders>
        <span slot="headers">确认订单</span>
      </SlotHeaders>
      <scroller>
        <div class="firm-order-center">
          <defaule-address></defaule-address>
          <ProductList></ProductList>
          <indormation></indormation>
          <shopping-price></shopping-price>
        </div>
      </scroller>

      <div class="firm-order-footer">
        <div class="firm-order-footer-price">
          合计： <span v-if="!surplus">￥{{ numbers.number * price.originalPrice}}</span>
          <span v-if="surplus">￥{{ surplus }}</span>
        </div>
        <div class="submit" @click="submit">提交订单</div>
      </div>
    </div>
</template>
<script>
  import DefauleAddress from '../components/firm-order/morendizhi'
  import ProductList from '../components/firm-order/Product-list'
  import Indormation from '../components/firm-order/information'
  import ShoppingPrice from '../components/firm-order/shoppingPrice'
  import SlotHeaders from '../components/header/headers'

  import Axios from 'axios'
  import qs from 'qs'

  export default {
    data() {
      return{
        orderNumber: ''
      }
    },
      components: {
        DefauleAddress,
        ProductList,
        Indormation,
        ShoppingPrice,
        SlotHeaders
      },
    methods:{
      goBack(){
        window.history.back()
      },
      submit(){
        let  data  = JSON.parse(window.localStorage.getItem('yoursShopping'))
        let { datas } = data[0]
        console.log(datas);
        let usertoken = JSON.parse(window.localStorage.getItem('usertoken'))
        let {token, uid} = usertoken
        // let { morenress } = this.$store.state
        // if(morenress = '' || undefined) {
        //   alert('你还没有添加地址，请去添加地址')
        // }else{
        //   this.$router.push({ name: 'confirmPayment', params: { allprice: this.numbers.num * this.price.originalPrice } })

        // }
        console.log(datas);
        let dataing = [datas];

        console.log(JSON.stringify(dataing))
        let that = this
        Axios.post(global.globalData.api + '/order/create?token=' + token + '&goodsJsonStr=' + 　encodeURIComponent(JSON.stringify(dataing)))
        .then(res => {
          console.log(res);
          let { data, code } = res.data
          if(code == 0){
            that.orderNumber = data.orderNumber
          }
          this.$router.push({ name: 'confirmPayment', params: { allprice: this.numbers.number * this.price.originalPrice, orderNumber: that.orderNumber} })
        })
      }
    },
    computed: {
      numbers() {
        let  data  = JSON.parse(window.localStorage.getItem('yoursShopping'))
        console.log(data);
        let { datas } = data[0]
        return datas
      },
      price() {
        let datas = JSON.parse(window.localStorage.getItem('yoursShopping'))
        let { data } = datas[0]
        return data
      },
      alprice() {
        if('num is not defined'){
          let { surplus } = JSON.parse(window.localStorage.getItem('yoursShopping'))
          return surplus
        }else{
          return  this.numbers.number * this.price.originalPrice
        }

      }
    },
    }
</script>

<style scoped>

</style>
