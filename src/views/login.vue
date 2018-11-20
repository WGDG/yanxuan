<template>
    <div class="box login-box">
       <div class="login-header">
         <span class="FontFamily i-fanhui" @click="goBack"></span>
         <H3>严选商城</H3>
       </div>
      <div class="login-content">
        <div class="login-tel">
          <input type="text" placeholder="手机号" v-model="tel">
        </div>
        <div class="login-tel">
          <input type="text" placeholder="图形验证码" @click="validateTel" v-model="imgCoding">
          <div class="img-code" v-if="code">
            <img  :src="codeImg" @click="tap"  alt="验证码" title="点击换一张">
          </div>
        </div>
        <div class="login-tel">
          <input type="text" placeholder="短信验证码" v-model="SMS">
          <button class="button" @click="VerifyingGraphicCode" :disabled="active" :class="{'active': active == true}"> {{ content }} </button>
        </div>
        <div class="login-tel">
          <input type="password" placeholder="密码" @click="verifyingSMS" v-model="passWord">
        </div>
        <p class="error"> {{ loginError }} </p>
        <p class="login-protocol">注册前请详细阅读注册协议，点击注册即为同意《 严选商城注册协议 》</p>
        <button class="login-btn" @click="register">注册</button>
        <router-link :to="{ name: 'denglu' }" tag="div">
          <p class="login-exist">已有账号</p>
        </router-link>

      </div>
    </div>
</template>

<script>
  import { debounce } from "../config/debounce";
  import Axios from 'axios'
  export default {
  data() {
    return {
      tel: '',
      SMS: '',
      loginError: '',
      codeImg: '',
      imgCode: '',
      code: false,
      key: '',
      imgCoding: '',
      content: '获取验证码',
      totalTime: 60,
      active: false,
      passWord: ''
    }
  },
  created() {
    var that = this
    this.$watch('tel', debounce((newQuery) => {
      let key = new Date() /1
      let reg = /^1[34578]\d{9}$/
      if(reg.test(newQuery)){
        this.code = true
        this.codeImg = (global.globalData.api + '/verification/pic/get?key=' + key)
       that.key = key
        this.loginError = ''
      }
    }, 200))
  },
   methods: {

     goBack() {
       window.history.back()
     },
     validateTel() {
       let tels = this.tel
       if (tels === '') {
         this.loginError ='手机号码不可为空'
       } else {
         if (tels !== '') {
           let reg=/^1[34578]\d{9}$/;
           if(!reg.test(tels)){
             this.loginError = '请输入有效的手机号码'
           }
         }
       }
     },
     tap() {
       var that = this
       let key = new Date() /1
       this.codeImg = (global.globalData.api + '/verification/pic/get?key=' + key)
       console.log(this.codeImg);
       that.key = key
       this.key = key
       this.loginError = ''
     },
     VerifyingGraphicCode() {
       var that = this
       let code = this.imgCoding
       let keys = that.key
       console.log(code);
       this.active = true
       this.content = this.totalTime + 's后重新发送'
           let clock = window.setInterval(() => {
             this.totalTime--
             this.content = this.totalTime + 's后重新发送'
             if (this.totalTime < 0) {     //当倒计时小于0时清除定时器
               window.clearInterval(clock)
               this.content = '重新发送验证码'
               this.active = false
           this.totalTime = 60
         }
       },1000)
       Axios.post(global.globalData.api + '/verification/sms/get?mobile=' + this.tel + '&key=' + keys + '&picCode=' + code).then(res => {
         console.log(res);
         let { code,msg } = res.data
         if(code !== 0){
           this.loginError = msg
         }
       })

     },
     verifyingSMS() {
       Axios.post(global.globalData.api + '/verification/sms/check?mobile=' + this.tel + '&code=' + this.SMS).then(res => {
         console.log(res);
         let { code } = res.data
         if(code == 0) {
           this.loginError = '验证码输入正确'
         }else {
           this.loginError = '您不能直接填写密码'
         }
       })
     },
     register() {
       let reg = new RegExp(/^(?![^a-zA-Z]+$)(?!\D+$)/);
       if(this.tel == '' || this.passWord == ''){
         this.loginError = '手机号或密码不能为空'
       }else if(this.passWord == '' || this.passWord.length < 6 || this.passWord.length > 18){
         this.loginError = '密码不能为空，长度为6-18位及字母加数字的组合'
       }else if (!reg.test(this.passWord)) {
         this.loginError = '密码错误'
       }else{
         Axios.post(global.globalData.api + '/user/m/register?mobile=' + this.tel + '&pwd=' + this.passWord + '&code=' + this.SMS).then( res => {
           console.log(res);
           let { code } = res.data
           if(code ==0 ){
             alter('注册成功')
             this.$router.push( { name: 'denglu' } )
           }else{
             alter('注册失败')
           }
         } )
       }
     }
   }
}
</script>

<style scoped>

</style>
