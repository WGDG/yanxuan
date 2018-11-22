<template>
    <div class="detail-reviews">
      <div v-for="(item, index) in dataList" :key="index" class="pingjia-content">
        <div class="pingjia-top">
          <span>用户名：{{ item.user.mobile }}</span>
          <span class="pingjia"> {{ item.goods.goodReputationStr }}</span>
        </div>
        <div>
          {{ item.goods.goodReputationRemark }}
        </div>
        <div>
          {{ item.goods.dateReputation }}
        </div>
      </div>
    </div>
</template>

<script>
  import Axios from 'axios'
    export default {
    data() {
      return{
        dataList: []
      }
    },
        created() {
          let { id } = this.$route.params
          console.log(this.$route.params);
          Axios.post(global.globalData.api + '/shop/goods/reputation?goodsId=' + id).then(res => {
            console.log(res);
            let { data } = res.data
            this.dataList = data
          })

        }
    }
</script>

<style scoped>

</style>
