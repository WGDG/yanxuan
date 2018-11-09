<template>
    <div class="shopping-cart">
      <shopping-cart-header></shopping-cart-header>
      <shopping-cart-content></shopping-cart-content>
      <Footer></Footer>
    </div>
</template>

<script>
  import ShoppingCartHeader from '../components/shoppingCart/shoppingCart-header'
  import ShoppingCartContent from '../components/shoppingCart/shoppingCartContent'
  import Footer from '../components/footer'
    export default {
      components:{
        ShoppingCartHeader,
        ShoppingCartContent,
        Footer
      }
    }
</script>

<style scoped>

</style>
