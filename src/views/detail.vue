<template>
    <div class="box detail">
      <scroller :on-infinite="infinite"  :on-refresh = "refresh">
        <div class="content">
          <DetailHeader></DetailHeader>
          <detail-guige></detail-guige>
          <detail-shopping></detail-shopping>
        </div>
      </scroller>
      <detail-footer></detail-footer>

        <div class="top-left" @click="goBack()">
          <div class="top-left-font">
            <span class="FontFamily i-fanhui"></span>
          </div>
        </div>


    </div>
</template>

<script>
import DetailHeader from '../components/detail/detail-header'
import DetailGuige from '../components/detail/detail-guige'
import DetailShopping from '../components/detail/detail-shopping'
import DetailFooter from '../components/detail/detail-footer'
import Axios from 'axios'
export default {
  components: {
    DetailHeader,
    DetailGuige,
    DetailShopping,
    DetailFooter
  },
  data () {
    return {
      detailData: {}
    }
  },
  created(){
    let { id } = this.$route.params
    Axios.post('https://api.it120.cc/small4/shop/goods/detail?id=' + id).then(res => {
      let { data } = res.data
      console.log(data)
      this.detailData = data
      this.$store.commit('pics', data.pics)
      this.$store.commit('basicInfo', data.basicInfo)
      this.$store.commit('content', data.content)
    })
  },
  methods:{
    goBack(){
      window.history.back()
    }
  }
}
</script>

<style scoped>

</style>
