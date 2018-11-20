<template>
  <div>
    <div class="pintuan" v-if="pintuan">
      <div class="pintuan-top">
        拼团流程
      </div>
      <ul class="pintuan-liucheng">
        <li>
          <span class="FontFamily i-wodeyue"></span>
          <p>支付开团或参团</p>
        </li>
        <li>
          <span class="FontFamily i-pintuan"></span>
          <p>邀请好友一起拼团</p>
        </li>
        <li>
          <span class="FontFamily i-daifahuo"></span>
          <p>达到人数分别发货</p>
        </li>
        <li>
          <span class="FontFamily i-tuikuan"></span>
          <p>人数不够自动退款</p>
        </li>
      </ul>
    </div>
    <div class="detail-guige" v-if="basicInfo || pintuan || guige.length" @click="specification">
      <div class="d-guige" >
        <span>选择规格：</span>
        <span>选择款型</span>
      </div>
      <span class="FontFamily i-arrow-right1"></span>
    </div>
  </div>

</template>
<script>
  import Axios from 'axios'
export default {
  computed:{
    basicInfo(){
      return this.$store.state.basicInfo.kanjia
    },
    pintuan(){
      return this.$store.state.basicInfo.pingtuan
    },
  },
  created() {
    let { id } = this.$route.params
    Axios.post(global.globalData.api +'/shop/goods/price/?goodsId=' + id).then(res => {
      console.log(res);
    })
  },
  methods:{
    specification(){
      this.$store.commit('specification')
    }
  }
}
</script>

<style scoped>

</style>
