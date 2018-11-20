<template>
<div class="box">
  <div class="boxq">
    <!--<div class="choice-detail-header">-->
      <!--<span class="FontFamily i-fanhui" @click="goBack()                                            "></span>-->
      <!--<span class="title">专栏详情</span>-->
    <!--</div>-->
    <SlotHeader>
      <span slot="headers">专栏详情</span>
    </SlotHeader>
    <div class="choice-detail-content">
      <scroller>
        <div>
          <h3>{{ choiceList.title }}</h3>
          <div class="choice-detail-img">
            <img :src="choiceList.pic" alt="">
          </div>
          <div class="detail-choice-content" v-html="choiceList.content"></div>
        </div>
      </scroller>
    </div>
  </div>
</div>
</template>

<script>
  import SlotHeader from '../header/headers'
import Axios from 'axios'
export default {
  data(){
    return{
      choiceList: []
    }
  },
  components: {
    SlotHeader
  },
  created() {
    let { id } = this.$route.params
    Axios.get(global.globalData.api + '/cms/news/detail?id=' + id).then(res => {
      let { data } = res.data
      this.choiceList = data
      console.log(this.choiceList);
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
