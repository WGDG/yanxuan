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
          合计：￥{{ alprice }}
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
  export default {
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
        let { morenress } = this.$store.state
        if(morenress = '' || undefined) {
          alert('你还没有添加地址，请去添加地址')
        }else{
          this.$router.push({ name: 'confirmPayment', params: { allprice: this.alprice } })
        }
      }
    },
    computed: {
      numbers() {
        let { datas } = JSON.parse(window.localStorage.getItem('yoursShopping'))
        console.log(datas);
        return datas
      },
      price() {
        let { data } = JSON.parse(window.localStorage.getItem('yoursShopping'))
        console.log(data);
        return data
      },
      alprice() {
        if('num is not defined'){
          let { surplus } = JSON.parse(window.localStorage.getItem('yoursShopping'))
          return surplus
        }else{
          return  this.numbers.num * this.price.originalPrice
        }

      },

    },
    }
</script>

<style scoped>

</style>
