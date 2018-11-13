<template>
    <div class="shopping-price">
      <span>商品金额</span>
      <span>￥{{ numbers.num * price.originalPrice}}</span>
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
          }
        }
    }
</script>

<style scoped>

</style>
