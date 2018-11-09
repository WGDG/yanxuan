<template>
    <div class="classify">
      <CiHeader></CiHeader>
      <CiContent></CiContent>
      <Footer></Footer>
    </div>
</template>

<script>
  import CiHeader from '../components/classify/classify-header'
  import CiContent from '../components/classify/classify-content'
  import Footer from '../components/footer'
    export default {
        components:{
          CiHeader,
          CiContent,
          Footer
        }
    }
</script>

<style scoped>

</style>
