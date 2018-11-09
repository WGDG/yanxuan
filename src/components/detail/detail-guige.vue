<template>
  <div class="detail-guige" >
    <div class="d-guige" >
      <span>选择规格：</span>
      <span>选择型号</span>
    </div>
    <span class="FontFamily i-arrow-right1"></span>
  </div>
</template>

<script>
export default {
  data(){
    return{
      basicInfo: {},
    }
  },
  created(){
    let { basicInfo } = this.$store.state
    this.basicInfo = basicInfo
  }
}
</script>

<style scoped>

</style>
