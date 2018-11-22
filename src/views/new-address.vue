<template>
<div class="new-address">
  <SlotHeaders>
    <span slot="headers">新增地址</span>
  </SlotHeaders>
  <div class="add">
    <div class="contents">
      <span>联系人</span>
      <input type="text" placeholder="姓名" v-model="linkMan">
    </div>
    <div class="contents">
      <span>手机号码</span>
      <input type="text" placeholder="11位手机号码" v-model="mobile">
    </div>
    <div class="contents">
      <span>选择地区</span>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item>
          <el-select v-model="formInline.region.name" placeholder="请选择" @change="city(formInline.region.name)">
            <el-option v-model="item.name"  v-for="(item, index) in formInline.region"  :id="item.id" :key="index" ref="dataInfo"></el-option>
          </el-select>

            <el-select v-model="formInline.regions.name" placeholder="请选择">
              <el-option v-model="item.name" v-for="(item, index) in formInline.regions" :key="index"></el-option>
            </el-select>

          <el-select v-model="formInline.regionss.name" placeholder="请选择">
            <el-option label="北京" value="北京"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <div class="contents">
      <span>详细地址</span>
      <input type="text" placeholder="街道门牌信息" v-model="address">
    </div>
    <div class="contents">
      <span>邮政编号</span>
      <input type="text" v-model="code">
    </div>
  </div>
  <div class="sddress-lone">
    <button @click="baocun">保存</button>
    <button>从微信读取</button>
    <button @click="goBack()">取消</button>
  </div>
</div>
</template>

<script>
  import SlotHeaders from '../components/header/headers'
  import Axios from 'axios'
    export default {
      components: {
        SlotHeaders
      },
      data() {
        return {
          formInline: {
            region: [],//省
            regions: [],//市、  区
            regionss: '',// 县
          },
          linkMan: '',
          mobile: '',
          address: '',
          code: '',
          id: ''
        }
      },
      created() {
        Axios.post('https://api.it120.cc/common/region/province').then(res => {
          let { data } = res.data
          this.formInline.region = data
        })
      },
      methods: {
        goBack() {
          window.history.back()
        },
        baocun(){
          console.log(this);
          let { region, regions, regionss } = this.formInline
          let { address, code, mobile, linkMan } = this
          let token = 'dcb9f8f9-35ca-440d-b66a-ebe0bee13932'
          // 详细地址 邮编                  电话     联系人
          Axios.post(global.globalData.api + '/user/shipping-address/add?address=' + address + '&cityId=' + regions + '&code=' + code + '&districtId=' + regionss + '&linkMan=' + linkMan + '&mobile=' + mobile + '&provinceId=' + region + '&token=' + token ).then(res => {
            console.log(res);
            console.log(res);
            let { data } = res.data
            window.localStorage.setItem('data',JSON.stringify(data))
            window.history.back()
          })
        },
        city: function (city) {
          let that = this
          console.log(city);
          let citys = that.formInline.region.filter(item => {
            return item.name == city
          })
          that.id = citys[0].id
          Axios.post('https://api.it120.cc/common/region/child?pid=' + that.id).then(res => {
            console.log(res);
            let { data } = res.data
            this.formInline.regions = data
            console.log(this.formInline.regions);
          })
        }
      }
    }
</script>

<style scoped>

</style>
