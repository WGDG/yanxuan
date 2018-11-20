<template>
    <div class="shopping-price">
      <span>商品金额</span>
      <span v-if="!surplus">￥{{ numbers.num * price.originalPrice}}</span>
      <span v-if="surplus">￥{{ surplus }}</span>
    </div>
</template>

<script>
    export default {
        computed: {
          numbers() {
            let { datas } = JSON.parse(window.localStorage.getItem('yoursShopping'))
            console.log(datas);
            return datas
          },
          price() {
            let { data } = JSON.parse(window.localStorage.getItem('yoursShopping'))
            console.log(data);
            return data
          },
          surplus() {
            let { surplus } = JSON.parse(window.localStorage.getItem('yoursShopping'))
            return surplus
          },
        }
    }
</script>

<style scoped>

</style>
