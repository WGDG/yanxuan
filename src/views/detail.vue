<template>
    <div class="box detail">
      <scroller>
        <div class="content">
          <DetailHeader></DetailHeader>
          <detail-guige></detail-guige>
          <detail-shopping></detail-shopping>
        </div>
      </scroller>
      <Model v-if="model"></Model>
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
import Model from '../components/model'
export default {
  components: {
    DetailHeader,
    DetailGuige,
    DetailShopping,
    DetailFooter,
    Model
  },
  data () {
    return {
      detailData: {}
    }
  },
  created(){
    let { id } = this.$route.params
    Axios.post('/api/shop/goods/detail?id=' + id).then(res => {
      let { data } = res.data
      this.detailData = data
      let { properties } = res.data.data
      this.$store.commit('pics', data.pics)
      this.$store.commit('basicInfo', data.basicInfo)
      this.$store.commit('content', data.content)
      this.$store.commit('guige', properties)
    })
  },
  methods:{
    goBack(){
      window.history.back()
    }
  },
  computed: {
    model() {
      return this.$store.state.code
    }
  }
}
</script>

<style scoped>

</style>
