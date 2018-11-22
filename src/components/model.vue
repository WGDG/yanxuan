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
              <div class="numbers" v-model="num">{{ num }}</div>
              <button @click="increment">+</button>
            </div>
          </div>
        </div>
        <!--<router-link to="/denglu"><div class="model-footer">立即购买</div></router-link>-->
        <div class="model-footer" @click="buy" v-if="!model.kanjia">立即购买</div>

          <div class="model-footer" v-if="model.kanjia" @click="buy">
            <router-link :to="{name:'kanjia', params: { id:  basicInfo.id, basicInfo: basicInfo}}">
            立即发起砍价，最低可看到{{ model.kanjiaPrice }}元
            </router-link>
          </div>


      </div>
    </div>
</template>

<script>
  import Axios from 'axios'
export default {
data(){
  return {
    code: 50,
    codes:50,
    guigec: '',// 型号
    color: '' ,// 颜色
    token : ''
  }
},

  computed: {
    model() {
      //console.log(this.$store.state.basicInfo);
      return this.$store.state.basicInfo
    },
    guige() {
      return this.$store.state.guige
    },
    num() {
      console.log(this.$store.state);
      return this.$store.state.num
    }
  },
  created() {
    let usertoken = JSON.parse(window.localStorage.getItem('usertoken'))
    let {token} = usertoken

    Axios.post(global.globalData.api + '/user/check-token?token=' + token).then(res => {
      console.log(res);
      let {code} = res.data
      if(code !== 0) {
        this.$router.push( { path: '/denglu' } )
      }

    })
  },
  methods: {
    demodel() {
      this.$store.commit('demodel')
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
    buy(){
      //console.log(this.$store.state);
      let usertoken = JSON.parse(window.localStorage.getItem('usertoken'))
      let {token} = usertoken
      let { id } = this.$route.params
      let { basicInfo, guigecc, guigec, colorc, color, num } = this.$store.state
      let { name, pic } = basicInfo
      if(guigecc.id) var guigeccName = guigecc.name;
      if(guigec.id) var guigecName = guigec.name;
      if (colorc.id) var colorcName = colorc.name;
      if(color.id) var colorName = color.name;
      let shopping = [
        {
          'goodsId': id,
          'goodsName': basicInfo.name,
          'number': num,
          'originalPrice': basicInfo.originalPrice,
          'propertyChildIds': guigecc + ':' + guigec +','+ colorc + ':' + color,
          'logisticsType':0
        }
      ]
      let guigeId = guigecc.id
      let guigeid = guigec.id
      let propertyChildIds = guigeId+':'+guigeid
      let number = num
      let goodsId = id
      let datas = {
        goodsId,
        name,
        pic,
        propertyChildIds,
        guigeccName,
        guigecName,
        colorcName,
        colorName,
        number
      }
      console.log(guigecc.id);
      console.log(guigec.id);
      console.log(colorc.id);
      console.log(color.id);
      Axios.post(global.globalData.api + '/shop/goods/price/?goodsId=' + id + '&propertyChildIds=' + guigecc.id +':'+guigec.id, colorc.id + ':' + color.id).then(res => {
        let { code } = res.data
        let { data } = res.data
        console.log(data);
        if( code == 0 & token !== '') {
          this.$router.push({path : '/firmOrder'})

          this.$store.commit('nums', {data,datas})

        }else {
          this.$router.push( { path: '/denglu' } )
        }
      })

    }
  },

}
</script>

<style scoped>

</style>
