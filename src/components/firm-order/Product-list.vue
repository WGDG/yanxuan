<template>
    <div class="product-list">
      <div class="product-list-title">
        商品列表
      </div>
      <div class="product-list-shopping">
        <div class="product-list-shopping-img">
          <img :src="nums.pic" alt="">
        </div>
        <div class="product-list-shopping-name">
          <p>
            <span class="p-l-s-name">{{ nums.name }}</span>
            <span class="p-l-s-price">￥{{ yoursShopping.originalPrice }}</span>
          </p>
          <p class="p-l-s-bottom">
            <span class="p-l-s-name">
              <div v-if="nums.colorName||nums.colorcName">
                 <span>{{ nums.colorcName }}</span> :
              <span>{{ nums.colorName }}</span>
              </div>

              <div v-if=" nums.guigeccName || nums.guigecName">
                <span>{{ nums.guigeccName }}</span> :
              <span>{{ nums.guigecName }}</span>
              </div>

            </span>
            <span class="p-l-s-price"><span class="FontFamily i-chenghao"> </span>{{ nums.num }}</span>
          </p>
          <p></p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      computed: {
        // ProductList() {
        //
        //   return this.$store.state.basicInfo
        // },
        yoursShopping() {
          console.log(JSON.parse(window.localStorage.getItem('yoursShopping')));
          let { data } = JSON.parse(window.localStorage.getItem('yoursShopping'))
          return data
        },
        nums() {
          let { datas } = JSON.parse(window.localStorage.getItem('yoursShopping'))
          return datas
        }
      }
    }
</script>

<style scoped>

</style>
