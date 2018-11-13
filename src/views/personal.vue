<template>
    <div class="personal">
      <scroller>
        <div class="personal-content">
          <personal-top></personal-top>
          <personal-advertisement></personal-advertisement>
          <personal-orders></personal-orders>
          <personal-my></personal-my>
          <personal-version></personal-version>
        </div>
      </scroller>


      <Footer></Footer>
    </div>
</template>

<script>
  import PersonalTop from '../components/personal/personal-top'
  import PersonalAdvertisement from '../components/personal/personal-advertisement'
  import PersonalOrders from '../components/personal/personal-orders'
  import PersonalMy from '../components/personal/personal-my'
  import PersonalVersion from '../components/personal/personal-version'
  import Footer from '../components/footer'
    export default {
       components:{
         PersonalTop,
         PersonalAdvertisement,
         PersonalOrders,
         PersonalMy,
         PersonalVersion,
         Footer
       }
    }
</script>

<style scoped>

</style>
