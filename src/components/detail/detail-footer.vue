<template>
  <div class="detail-footer">
    <div class="kanjia" v-if="basicInfo.kanjia">
      <span>立即发起砍价，最低可砍到{{ basicInfo.kanjiaPrice }}元</span>
    </div>

    <div class="font" v-if="!basicInfo.kanjia">
      <div class="font-left">
        <span class="FontFamily i-lianxikefu"></span>
      </div>
      <div class="font-left">
        <span class="FontFamily i-gouwuchekong"></span>
      </div>
      <div class="font-left">
        <span class="FontFamily i-shoucang"></span>
      </div>
    </div>
    <div class="youTo" v-if="!basicInfo.kanjia">
      <div class="youTo-left">立即购买</div>
      <div class="youTo-right">加入购物车</div>
    </div>
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
