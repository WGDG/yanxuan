<template>
    <div class="product-list">
      <div class="product-list-title">
        商品列表
      </div>
      <div class="product-list-shopping">
        <div class="product-list-shopping-img">
          <img :src="nums.pic" alt="" v-if="!bargain">
          <img :src="bargain. pic" alt="" v-if="bargain">
        </div>
        <div class="product-list-shopping-name">
          <p>
            <span class="p-l-s-name" v-if="!bargain">{{ nums.name }}</span>
            <span class="p-l-s-name" v-if="bargain">{{ bargain.name }}</span>
            <span class="p-l-s-price" v-if="!bargain">￥{{ yoursShopping.originalPrice }}</span>
            <span class="p-l-s-price" v-if="bargain">￥{{ surplus }}</span>
          </p>
          <p class="p-l-s-bottom">
            <span class="p-l-s-name" v-if="!bargain">
              <div v-if="nums.colorName||nums.colorcName">
                 <span>{{ nums.colorcName }}</span> :
                 <span>{{ nums.colorName }}</span>
              </div>

              <div v-if=" nums.guigeccName || nums.guigecName">
                <span>{{ nums.guigeccName }}</span> :
              <span>{{ nums.guigecName }}</span>
              </div>

            </span>

            <span class="p-l-s-price" v-if="!bargain"><span class="FontFamily i-chenghao" > </span>{{ nums.number }}</span>
          </p>
          <p></p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      computed: {
        ProductList() {

          return this.$store.state.basicInfo
        },
        yoursShopping() {
          let datas = JSON.parse(window.localStorage.getItem('yoursShopping'))
          let { data } = datas[0]
          return data
        },
        nums() {
          let data = JSON.parse(window.localStorage.getItem('yoursShopping'))
          let {datas} = data[0]
          return datas
        },
        surplus() {
          let { surplus } = JSON.parse(window.localStorage.getItem('yoursShopping'))
          return surplus
        },
        bargain() {
          let { bargain } = JSON.parse(window.localStorage.getItem('yoursShopping'))
          return bargain
        }
      }
    }
</script>

<style scoped>

</style>
