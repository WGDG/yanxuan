<template>
    <div class="default-address" >
      <ul class="address-yours" >
        <li>
          <div class="yours">
            <span class="FontFamily i-dizhi"></span>
            <ul class="address-name">
              <li>{{ morenList.linkMan }}  {{ morenList.mobile }}</li>
              <li>{{ morenList.address }}</li>
            </ul>
          </div>
        </li>
        <router-link :to="{ name: 'deaddress',params: { id: morenList.id, morenList } }" tag="li">
          <span class="FontFamily i-arrow-right1"></span>
        </router-link>
      </ul>
    </div>
</template>

<script>
  import Axios from 'axios'
    export default {
    data(){
      return {
        morenList: []
      }
    },
        created() {
          let token = 'dcb9f8f9-35ca-440d-b66a-ebe0bee13932'
          Axios.post('/api/user/shipping-address/default?token=' + token).then(res => {
            console.log(res);
            let { data } = res.data
            this.morenList = data
            this.$store.commit('morenress', this.morenList)
          })
        }
    }

</script>

<style scoped>

</style>
