<template>
    <div class="shopping-price">
      <span>商品金额</span>
      <span v-if="!surplus">￥{{ numbers.number * price.originalPrice}}</span>
      <span v-if="surplus">￥{{ surplus }}</span>
    </div>
</template>

<script>
    export default {
        computed: {
          numbers() {
            let data = JSON.parse(window.localStorage.getItem('yoursShopping'))
            let { datas } = data[0]
            console.log(datas);
            return datas
          },
          price() {
            let datas = JSON.parse(window.localStorage.getItem('yoursShopping'))
            let { data } = datas[0]
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
