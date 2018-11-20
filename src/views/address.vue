<template>
    <div class="box">
  <div class="content">
    <SlotHeaders>
      <span slot="headers">我的地址</span>
    </SlotHeaders>
    <scroller>

      <div class="address-content">
        <ul class="address-yours" v-for="(item, index) in disList" :key="index">
          <li>
            <div class="yours">
              <span class="FontFamily i-xuanzhong"></span>
              <ul class="yours-name">
                <li>{{ item.linkMan }}  {{ item.mobile }}</li>
                <li>{{ item.address }}</li>
              </ul>
            </div>
          </li>
          <router-link :to="{ name: 'deaddress',params: { id: item.id } }" tag="li">
            <span class="FontFamily i-editor" @click="de"></span>
          </router-link>
        </ul>
      </div>
    </scroller>
  </div>
  <router-link :to="{ name: 'newAddress' }">
    <div class="address-footer">
      <span class="FontFamily i-tianjiadizhi"></span>
      <span>新增地址</span>
    </div>
  </router-link>

</div>
</template>

<script>
  import SlotHeaders from '../components/header/headers'
  import Axios from 'axios'
    export default {
    data() {
      return {
        disList: []
      }

    },
      components: {
        SlotHeaders
      },
      created(){
        let token = 'dcb9f8f9-35ca-440d-b66a-ebe0bee13932'
        Axios.post(global.globalData.api/user + '/shipping-address/list?token=' + token).then(res => {
          console.log(res);

          let { data } = res.data
          this.disList = data
        })
      },
      methods: {
      de(){
        console.log('Aa');
      }
      }
    }
</script>

<style scoped>

</style>
