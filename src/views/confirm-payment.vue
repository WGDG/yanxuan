<template>
    <div class="confirm-payment">
      <!--<div class="confirm-payment-header">-->
        <!--<span class="FontFamily i-fanhui" @click="goBack()"></span>-->
        <!--<span>确认付款</span>-->
      <!--</div>-->
      <slot-headers>
        <span slot="headers">确认付款</span>
      </slot-headers>
      <div class="confirm-payment-content">
        <div class="confirm-payment-price">
          <span class="FontFamily i-wodeyue"></span>
          <div class="all-price">
            <p>
              <span>商品总额：</span>
              <span>￥ {{ allprice }}</span>
            </p>
            <p>
              <span>订单号：{{ orderNumber }}</span>
            </p>
          </div>
        </div>
        <default-address></default-address>
      </div>
      <div class="confirm-payment-footer" @click="payment">
        微信付款￥{{ allprice }}
      </div>
    </div>
</template>

<script>
  import DefaultAddress from '../components/firm-order/morendizhi'
  import SlotHeaders from '../components/header/headers'
    export default {
    components: {
      DefaultAddress,
      SlotHeaders
    },
      computed: {
        allprice() {
          return this.$route.params.allprice
        },
        orderNumber() {
          return this.$route.params.orderNumber
        }
      },
      methods: {
      goBack() {
        window.history.back()
      },
      payment(){
        console.log(this.$router);
        window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxe93d3f996beab1eb&redirect_uri=http://www.wyunfei.com/index1.html&response_type=code&scope=snsapi_userinfo&state=' + this.allprice
      }
    }
    }
</script>

<style scoped>

</style>
