<template>
    <div class="denglu">
      <!--<div class="denglu-header">-->
        <!--<span class="FontFamily i-fanhui" @click="goBack"></span>-->
        <!--<span>登录</span>-->
      <!--</div>-->
      <SlotHeaders>
        <span slot="headers">登录</span>
      </SlotHeaders>
      <div class="denglu-content">
        <div class="denglu-name">
          <span>用户名：</span>
          <input type="text" placeholder="请输入用户名">
        </div>
        <div class="denglu-password">
          <span>密码：</span>
          <input type="password" placeholder="请输入密码">
        </div>
      </div>
      <button @click="login">登录</button>
      <!--<router-link :to="{ name: 'firmOrder' }">-->
        <!--<button>登录</button>-->
      <!--</router-link>-->

    </div>
</template>

<script>
  import SlotHeaders from '../components/header/headers'
  import qs from 'Qs'
  import Axios from 'axios'
    export default {
      components: {
        SlotHeaders
      },
      data() {
        return{
          name: 13500000000,
          password: '555555'
        }

      },
      created() {
        let token = 'dcb9f8f9-35ca-440d-b66a-ebe0bee13932'
        Axios.post('/api/user/check-token?token=' + token).then(res => {
          console.log(res);
          let { code } = res.data
          if (code == 0){
            this.$router.push({path : '/firmOrder'})
          }else{
            alert('您还未登录，请登录')
          }
        })
      },
      methods: {
        goBack() {
          window.history.back()
        },
        login() {
          console.log(this.name);
          Axios.post('/api//user/m/login?deviceId=007&deviceName=monkey&mobile=' +this.name+ '&pwd=' +this.password ).then(res => {
            let { code } = res.data
            if(code == 0) {
              this.$router.push({path : '/firmOrder'})
            }else{
              alert('用户名或密码错误')
            }
            let { token } = res.data.data
            console.log(token);
            this.$store.commit('tooken', token)
          })
        }
      }
    }
</script>

<style scoped>

</style>
