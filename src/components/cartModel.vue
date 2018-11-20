<template>
    <div class="model">
      <div class="top"></div>
      <div class="model-content">
        <div class="mo-co">
          <div class="mondel-title">
            <div class="title-img">
              <img :src="model.pic" alt="">
            </div>
            <ul>
              <li class="model-name">
                <p>{{ model.name }}</p>
              </li>
              <li class="model-price">
                <p>{{ model.originalPrice }}</p>
              </li>
            </ul>
            <span class="FontFamily i-guanbi" @click="demodel"></span>
          </div>
          <div class="model-guige" >
            <div class="guige" v-for="(item, index) in guige" :key="index">
              <p>选择{{ item.name }}</p>
              <div class="button" @click="selects(index + ''+ dedex)" v-model="guigec" :value="it.name" :class="{ active: code == index + ''+ dedex }" v-for="(it,dedex) in item.childsCurGoods" :key="dedex" v-if="index">
                {{ it.name }}
              </div>
              <div class="button" @click="select(index + ''+ dedex)" v-model="color" :value="it.name" :class="{ active: codes == index + ''+ dedex }" v-for="(it,dedex) in item.childsCurGoods" :key="dedex" v-if="!index">
                {{ it.name }}
              </div>
            </div>

          </div>
          <div class="model-num">
            <span>购买数量</span>
            <div class="number">
              <button @click="decrement">-</button>
              <div class="numbers">{{ num }}</div>
              <button @click="increment">+</button>
            </div>
          </div>
        </div>
        <!--<router-link to="/denglu"><div class="model-footer">立即购买</div></router-link>-->
        <div class="model-footer" @click="addToCart">加入购物车</div>
      </div>
    </div>
</template>

<script>
  import Axios from 'axios'
  import qs from 'Qs'
export default {
data(){
  return {
    code: 50,
    codes:50,
    guigec: '',// 型号
    color: '' ,// 颜色
    token : '',
    shoppingList: []
  }
},

  computed: {
    model() {
      return this.$store.state.basicInfo
    },
    guige() {
      return this.$store.state.guige
    },
    num() {
      return this.$store.state.num
    }
  },
  created() {
    let usertoken = JSON.parse(window.localStorage.getItem('usertoken')) || []
    let {token} = usertoken
    Axios.post(global.globalData.api + '/user/check-token?token=' + token).then(res => {
      console.log(res);
      let {code} = res.data
      this.token = code
    })
  },
  methods: {
    demodel() {
      this.$store.commit('demodel2')
    },
    decrement() {
      this.$store.commit('decrement')
    },
    increment(){
      this.$store.commit('increment')
    },
    selects(k) {
      this.code = k
      for (let i in this.guige){
        this.$store.commit('colorc', this.guige[i])
        for (let s in this.guige[i].childsCurGoods) {
          if ( i +''+ s == k) {
            this.$store.commit('color', this.guige[i].childsCurGoods[s] )

          }
        }
      }
    },
    select(k) {
      this.codes = k
      for (let i in this.guige){
        this.$store.commit('guigecc', this.guige[0])
        for (let s in this.guige[i].childsCurGoods) {
          if ( i +''+ s == k) {
            this.$store.commit('guigec', this.guige[i].childsCurGoods[s] )

          }
        }
      }
    },
    addToCart(){
      console.log(this);
      let token = 'dcb9f8f9-35ca-440d-b66a-ebe0bee13932'
      let { id } = this.$route.params
      let { basicInfo, guigecc, guigec, colorc, color, num } = this.$store.state
      let { name, pic } = basicInfo
      console.log(guigecc.id);
      console.log(guigec.id);
      console.log(colorc.id);
      console.log(color.id);
      if(guigecc.id) var guigeccName = guigecc.name;
      if(guigec.id) var guigecName = guigec.name;
      if (colorc.id) var colorcName = colorc.name;
      if(color.id) var colorName = color.name;
      Axios.post(global.globalData.api + '/shop/goods/price/?goodsId=' + id + '&propertyChildIds=' + guigecc.id +':'+guigec.id, colorc.id + ':' + color.id).then(res => {
        console.log(res);
        let { code } = res.data
        let data = res.data.data
        console.log(data);
        data.name = name
        data.pic = pic
        data.guigeccName = guigeccName
        data.guigecName = guigecName
        data.colorcName = colorcName
        data.colorName = colorName
        data.num = num
        data.checked = true
        console.log(data);
        if( code == 0) {
         // this.$store.commit('addToCart', data)

          this.$store.commit('shoppingCart',data)
          this.$store.commit('demodel2')
          alert('加入购物车成功')
        }else{
          alert('加入购物车失败')
        }
      })

    }
  },

}
</script>

<style scoped>

</style>
