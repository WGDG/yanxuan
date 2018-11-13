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
        <div class="model-footer" @click="buy">立即购买</div>
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
    let token = 'dcb9f8f9-35ca-440d-b66a-ebe0bee13932'
    Axios.post('/api/user/check-token?token=' + token).then(res => {
      console.log(res);
      let {code} = res.data
      this.token = code
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
      console.log(this.$store.state);
      let { token } = this
      let { id } = this.$route.params
      let { basicInfo, guigecc, guigec, colorc, color, num } = this.$store.state
      let { name, pic } = basicInfo
      if(guigecc.id) var guigeccName = guigecc.name;
      if(guigec.id) var guigecName = guigec.name;
      if (colorc.id) var colorcName = colorc.name;
      if(color.id) var colorName = color.name;
      let datas = {
        name,
        pic,
        guigeccName,
        guigecName,
        colorcName,
        colorName,
        num
      }
      console.log(guigecc.id);
      console.log(guigec.id);
      console.log(colorc.id);
      console.log(color.id);
      Axios.post('/api/shop/goods/price/?goodsId=' + id + '&propertyChildIds=' + guigecc.id +':'+guigec.id, colorc.id + ':' + color.id).then(res => {
        let { code } = res.data
        let { data } = res.data
        console.log(data);
        if( code == 0 & token !== '') {
          this.$router.push({path : '/firmOrder'})

          this.$store.commit('nums', {data,datas})

        }else if (code == 0 || token === '') {
          this.$router.push( { path: '/denglu' } )
        }
        else{
          alert('下单失败')
        }
      })
    }
  },

}
</script>

<style scoped>

</style>
