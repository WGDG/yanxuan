<template>
  <div class="detail-footer">

    <div class="kanjia" v-if="basicInfo.kanjia" @click="kanjia">
        <span >立即发起砍价，最低可砍到{{ basicInfo.kanjiaPrice }}元</span>
    </div>

    <div class="detail-footer-pingtuan" v-if="basicInfo.pingtuan">
      <div class="font-left">
        <span class="FontFamily i-lianxikefu"></span>
      </div>
      <div class="font-left">
        <span class="FontFamily i-shoucang"></span>
      </div>
      <div class="font-right">
        <div class="yuanjia" @click="model">
          <div>￥429</div>
          <div>原价购买</div>
        </div>
        <div class="kaituan">
          <div class="kaituanjia">￥0.04</div>
          <div @click="pingtuan">一键开团</div>
        </div>
      </div>
    </div>

    <div v-if="!basicInfo.pingtuan && !basicInfo.kanjia" class="zhengchang">
      <div class="font" v-if="!basicInfo.kanjia">
        <div class="font-left">
          <span class="FontFamily i-lianxikefu"></span>
        </div>
        <router-link :to=" { name: 'shoppingCart' } ">
          <div class="font-left">
            <span class="FontFamily i-gouwuchekong"></span>
          </div>
        </router-link>

        <div class="font-left">
          <span class="FontFamily i-shoucang"></span>
        </div>
      </div>

      <div class="youTo" v-if="!basicInfo.kanjia">
        <div class="youTo-left" @click="model">立即购买</div>
        <div class="youTo-right" @click="addCart">加入购物车</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Axios from 'axios'
export default {
  computed: {
    basicInfo(){
      return this.$store.state.basicInfo
    }
  },
  methods: {
    model(){
      this.$store.commit('model')
    },
    addCart() {
      this.$store.commit('cartModel')
    },
    pingtuan() {
      this.$store.commit('pingtuanModel')
    },
    kanjia() {
      console.log('Aa');
      let usertoken = JSON.parse(window.localStorage.getItem('usertoken'))
      let {token} = usertoken
      Axios.post(global.globalData.api + '/user/check-token?token=' + token).then(res => {
        console.log(res);
        let {code} = res.data
        if(code == 0) {
          this.$router.push( { name: 'kanjia' } )
      }else{
          this.$router.push( { path: 'login' } )
        }

      })
    }
  }
}
</script>

<style scoped>

</style>
