<template>
    <div class="strict">
      <div class="strict-header">

        <router-link to="/" class="fanhui"><span class="FontFamily i-fanhui"></span></router-link>
        <span class="yanxuan">严选专栏</span>
      </div>
      <strict-beet-scroll></strict-beet-scroll>
      <strict-list></strict-list>
    </div>
</template>

<script>
  import StrictBeetScroll from '../components/strict/strictBeetScroll'
  import StrictList from '../components/strict/strictList'
  export default {
        components: {
          StrictBeetScroll,
          StrictList
        }
    }
</script>

<style scoped>

</style>
