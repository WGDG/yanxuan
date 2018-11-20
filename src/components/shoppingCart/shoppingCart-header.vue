<template>
    <div class="shopping-cart-header">
      <span @click="bian">编辑</span>
      <h3>购物车</h3>
    </div>
</template>

<script>
    export default {
        methods: {
          bian() {
            this.$store.commit('bian')
          }
        }
    }
</script>

<style scoped>

</style>
