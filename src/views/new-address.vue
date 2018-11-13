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
          <el-select v-model="formInline.region" placeholder="请选择">
            <el-option label="北京" value="北京"></el-option>

          </el-select>
        </el-form-item>
      </el-form>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item>
          <el-select v-model="formInline.regions" placeholder="请选择">
            <el-option label="昌平" value="昌平"></el-option>
            <el-option label="通州" value="通州"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item>
          <el-select v-model="formInline.regionss" placeholder="请选择">
            <el-option label="区域五" value="区域五"></el-option>
            <el-option label="区域六" value="区域六"></el-option>
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
            region: 110000,//省
            regions: 110112,//市、  区
            regionss: '',// 县
          },
          linkMan: '',
          mobile: '',
          address: '',
          code: ''
        }
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
            Axios.post('/api/user/shipping-address/add?address=' + address + '&cityId=' + regions + '&code=' + code + '&districtId=' + regionss + '&linkMan=' + linkMan + '&mobile=' + mobile + '&provinceId=' + region + '&token=' + token ).then(res => {
              console.log(res);
              let { data } = res.data
              window.localStorage.setItem('data',JSON.stringify(data))
            })
          }
      }
    }
</script>

<style scoped>

</style>
