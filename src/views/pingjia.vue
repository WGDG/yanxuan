<template>
  <div class="box">
    <slot-header>
      <span slot="headers">商品评价</span>
    </slot-header>
   <div class="pingjia-content">
     <ul class="haoping">
       <li><button @click="pingjiaaa"> 差评</button></li>
       <li><button @click="pingjiabb"> 中评</button></li>
       <li><button @click="pingjiacc">好评</button></li>
     </ul>
     <div class="textarea">
       <textarea v-model="content" name="" id="" cols="40" rows="10" maxlength="200"></textarea>
     </div>
     <div class="subpingjia">
       <button @click="submit">评价</button>
     </div>

   </div>
  </div>
</template>

<script>
  import SlotHeader from '../components/header/headers'
  import Axios from 'axios'
    export default {
    data(){
      return {
        pingjiaa: 0,
        pingjiab: 1,
        pingjiac: 2,
        pingjiad:'',
        content: ''
      }
    },
      components: {
        SlotHeader
      },

     methods: {
      pingjiaaa() {
        this.pingjiad=this.pingjiaa
        console.log(this.pingjiad)
      },
      pingjiabb() {
        this.pingjiad=this.pingjiab
        console.log(this.pingjiad)
      },
      pingjiacc() {
        this.pingjiad=this.pingjiac
        console.log(this.pingjiad)
      },
      submit() {
        let { orderId, id } = this.$route.params
        let usertoken = JSON.parse(window.localStorage.getItem('usertoken'))
        let {token, uid} = usertoken
        let postJsonString ={
          token: token,
          orderId: orderId,
          reputations: [
            {
              id: id,
              reputation: this.pingjiad,
              remark: this.content,
            }
          ]
        }
        console.log(JSON.stringify(postJsonString))
         Axios.post(global.globalData.api + '/order/reputation?postJsonString=' + encodeURIComponent(JSON.stringify(postJsonString))).then(res => {
           console.log(res);
         })

        }
      }
    }
</script>

<style scoped>

</style>
