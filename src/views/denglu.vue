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
          <input type="text" placeholder="请输入用户名" v-model="userName">
        </div>
        <div class="denglu-password">
          <span>密码：</span>
          <input type="password" placeholder="请输入密码" v-model="password">
        </div>
      </div>
      <button @click="login">登录</button>
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
          name:'',
          password: ''
        }

      },
      created() {
        let usertoken = JSON.parse(window.localStorage.getItem('usertoken'))
        let {token} = usertoken
        //console.log(usertoken);
        Axios.post(global.globalData.api +'/user/check-token?token=' + token).then(res => {
          console.log(res);
          let { code } = res.data
        })
      },
      methods: {
        goBack() {
          window.history.back()
        },
        login() {
          let { userName } = this
          let { password } = this
          Axios.post(global.globalData.api + '/user/m/login?deviceId=007&deviceName=monkey&mobile=' + userName+ '&pwd=' + password ).then(res => {
            let { code, data } = res.data
            console.log(data);
            if(code == 0) {
             window.history.back(-2)
              window.localStorage.setItem('usertoken', JSON.stringify(data))
            }else{
              alert('用户名或密码错误')
            }
            let { token } = res.data.data
            console.log(token);
            this.$store.commit('token', token)
          })
        }
      }
    }
</script>

<style scoped>

</style>
