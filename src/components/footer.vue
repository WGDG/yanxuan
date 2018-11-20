<template>
    <div class="footer">
      <div class="bar-foot" v-if="list">
        <ul class="bar-foot-left" v-if="bian">
          <li @click="checkAll">
            <span class="FontFamily i-xuanzhong" :class="{'active':checkedAll == true}"></span>
            <span class="bar-foot-left-font">全选</span>
          </li>
          <li>合计：￥{{ allNumber }}</li>
        </ul>
        <div class="bar-foot-right" v-if="bian" @click="">
          下单
        </div>
        <ul class="bar-foot-left" v-if="!bian">
          <li @click="checkAll"><span class="FontFamily i-xuanzhong" :class="{'active':checkedAll == true}" ></span><span class="bar-foot-left-font">全选</span></li>
        </ul>
        <div class="bar-foot-right detail" v-if="!bian" @click="detail">
          删除
        </div>
      </div>
      <ul>
        <li>
          <router-link :to=" { name: 'index' } ">
            <div class="FontFamily i-shouye"></div>
            <div>首页</div>
          </router-link>

        </li>
        <li>
          <router-link :to=" { name: 'classify' } ">
            <div class="FontFamily i-chouti2"></div>
            <div>分类</div>
          </router-link>

        </li>
        <li>
          <router-link :to=" { name: 'shoppingCart' } ">
            <div class="FontFamily i-gouwuchekong"></div>
            <div>购物车</div>
          </router-link>

        </li>
        <li>
          <router-link :to=" { name: 'personal' } ">
            <div class="FontFamily i-nanrenshixing"></div>
            <div>个人</div>
          </router-link>

        </li>
      </ul>
    </div>
</template>

<script>
  import '../assets/css/footer.scss'
    export default {
    computed: {

      bian() {
        return this.$store.state.bian
      },
      checkedAll() {
        return this.$store.state.checkAll
      },
      list() {
        let numbers = JSON.stringify(window.localStorage.getItem('shoppingList'))
        //console.log(numbers);
        if(this.$route.path == '/shoppingCart'){
          return this.$store.state.list
        }
      },
      allNumber() {
        let {list} = this.$store.state
        let totalPrice = 0
        console.log(list);
        list.forEach( (val, index) => {
          totalPrice += val.num * val.price
        })
        return totalPrice
      }
    },
    methods: {
      checkAll() {
         this.$store.commit('checkAll')
      },
      detail(){
        this.$store.commit('detail')
      }
    }
    }
</script>

<style scoped>

</style>
