<template>
<div class="box">
  <scroller >
    <div id="content" class="content" :on-refresh="refresh" :on-infinite="infinite">
      <Banner></Banner>
      <Nav></Nav>
      <whole-price></whole-price>
      <Choice></Choice>
      <pop-recommend></pop-recommend>
    </div>
  </scroller>

  <Footer></Footer>
</div>
</template>

<script>
  import '../assets/css/index/index.scss'
  import Banner from '../components/index/banner'
  import Nav from '../components/index/nav'
  import WholePrice from '../components/index/wholePrice'
  import Choice from '../components/index/choice'
  import PopRecommend from '../components/index/Popularity-Recommendation'
  import Footer from '../components/footer'
    export default {
        components: {
          Banner,
          Nav,
          WholePrice,
          Choice,
          PopRecommend,
          Footer
        }
    }
</script>

<style lang="scss">

</style>
