<template>
  <scroller>
    <div class="box detail">
      <div class="kanjia">
        <div class="kanjia-img">
          <img src="../assets/images/6_11.gif" alt="">
        </div>
        <p class="kanjia-name">初一</p>
        <p class="jieshao">我发现一件好货，快来帮我砍到最低价吧~</p>
        <div class="kanjiaShopping">
          <div class="kanjiaShopping-img">
            <img :src="bargain.pic" alt="">
          </div>
          <ul class="kanjiaShopping-title">
            <li class="kanjiaShopping-name">{{ bargain.name }}</li>
            <li class="kanjiaShopping-price">
              <span class="kanjiaShopping-small">底价 ￥{{ bargain.kanjiaPrice }}</span>
              <span class="kanjiaShopping-original">原价 ￥{{ bargain.originalPrice }}</span>
            </li>
          </ul>
        </div>
        <p class="yikan">当前价{{ surplus }}元，已砍{{ cutPrices }}元</p>
        <div class="kanjia-button">
          <button class="my" @click="mybargain" v-if=" cutPrices == 0 ">自己先砍一刀</button>
          <button class="my" @click="nowPrice" v-if=" cutPrices !== 0 ">以当前价购买</button>
          <button class="request" @click="request">邀请好友砍价</button>
        </div>
        <div class="kanjiatime">
          <span>{{ timeDate }}</span> : <span>{{ timehover }}</span> : <span>{{ timeminute }}</span> : <span>{{ timesecond }}</span>
        </div>
      </div>

      <div class="kanjia-bottom">
        <span class="jiao"></span>
        <p>{{ helpNumber }}名好友帮忙砍价</p>
      </div>

      <div class="top-left" @click="goBack()">

        <div class="top-left-font">
          <span class="FontFamily i-fanhui"></span>
        </div>
      </div>
    </div>
  </scroller>

</template>
<script>
import Axios from 'axios'
export default {
  data() {
    return {
      isEnd: false,
      kanjia: [],
      cutPrice: [],
      endTime: '',
      timeDate: '',
      timehover: '',
      timeminute: '',
      timesecond: '',
      helpNumber: ''
    }
  },
  computed: {
    bargain() {
      return this.$store.state.basicInfo
    },
    cutPrices() {
      let cutStorage = this.$store.getters.cutStorage || []
      let allcut = 0
      cutStorage.forEach((item,kk) => {
         allcut += item
      })
      if(allcut > this.bargain.originalPrice - this.bargain.kanjiaPrice){
        return allcut = this.bargain.originalPrice - this.bargain.kanjiaPrice
      }else {
        return allcut
      }
    },
    surplus() {
      let surplus = this.bargain.originalPrice - this.cutPrices
      if(surplus > this.bargain.kanjiaPrice) {
        surplus = this.bargain().originalPrice - this.cutPrices
      }else{
        surplus = this.bargain.kanjiaPrice;
      }
      return surplus
    }
  },
  created() {
    let usertoken = JSON.parse(window.localStorage.getItem('usertoken'))
    let {token,uid} = usertoken
    Axios.post(global.globalData.api + '/user/check-token?token=' + token).then(res => {
      console.log(res);
      let {code} = res.data
      if(code != 0){
        this.$router.push( { path: '/denglu' } )
      }
    })
    let that = this
    that.setEndTime();

    Axios.get(global.globalData.api + '/shop/goods/kanjia/list').then(res => {
      let { data } = res.data
      let da = data.result.filter(item => {
        return item.goodsId == that.bargain.id
      })
      that.kanjia = da
      that.endTime = da[0].dateEnd
      Axios.post(global.globalData.api + '/shop/goods/kanjia/info?kjid=' + da[0].id + '&joiner=' + uid).then(res => {
        console.log(res);
        let { data } = res.data
        this.helpNumber = data.kanjiaInfo.helpNumber
      })
    })

  },
  methods:{
    goBack(){
      window.history.back()
    },
    mybargain(){
      console.log(this.bargain);
      let kjid = this.kanjia[0].id
      let usertoken = JSON.parse(window.localStorage.getItem('usertoken'))
      let {token, uid} = usertoken
      console.log(this);
      Axios.post(global.globalData.api + '/shop/goods/kanjia/help?token=' + token + '&kjid=' + kjid + '&joinerUser=' + uid).then(res => {
        console.log(res);
        let { data, code } = res.data
        if (code === 0 && uid === data.uid) {
          alert('您已经砍过，邀请您的好友继续帮您砍价吧')
        }else  if (code === 0 && uid !== data.uid){
          alert('砍价成功，继续邀请好友帮你砍价')
          this.$store.commit('cutPrice', data.cutPrice)
        }

      })
    },
    nowPrice() {
      console.log(this);
      let newPrices = {
        bargain: this.bargain,
        surplus: this.surplus
      }
      this.$store.commit('nowPrice', newPrices)
      this.$router.push({ path: '/firmOrder' })
    },
    request() {

    },
    setEndTime() {
      let that = this

      let interval = setInterval(function timestampToTime() {
        let date = new Date(that.endTime) - new Date()
          if (date === 0) {
            that.isEnd = true;
            clearInterval(interval)
          }else{
            that.timeDate = parseInt(date / 1000 / 60 / 60 / 24, 10)
            that.timehover = parseInt(date / 1000 / 60 / 60 % 24, 10)
            if(that.timehover < 10){
              that.timehover = '0' + that.timehover
            }
            that.timeminute = parseInt(date / 1000 / 60 % 60, 10)
            if(that.timeminute < 10){
              that.timeminute = '0' + that.timeminute
            }
            that.timesecond = parseInt(date / 1000 % 60, 10)
            if(that.timesecond < 10){
              that.timesecond = '0' + that.timesecond
            }
          }
      }, 1000)
    }
  }
}
</script>

<style scoped>

</style>
