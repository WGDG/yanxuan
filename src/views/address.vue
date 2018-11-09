<template>
    <div class="box">
      <div class="content">
        <div class="address-header">
          <router-link to="/personal">
            <span class="FontFamily i-fanhui"></span>
          </router-link>

          <sapn>我的地址</sapn>
        </div>
        <scroller :on-refresh="refresh" :on-infinite="infinite">

          <div class="address-content">
            <ul class="address-yours">
              <li>
                <div class="yours">
                  <span class="FontFamily i-xuanzhong"></span>
                  <ul class="yours-name">
                    <li>王刚 180011259447</li>
                    <li>吉利大学</li>
                  </ul>
                </div>
              </li>
              <li>
                <span class="FontFamily i-editor"></span>
              </li>
            </ul>
          </div>
        </scroller>
      </div>

      <div class="address-footer">
        <span class="FontFamily i-tianjiadizhi"></span>
        <span>新增地址</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "address"
    }
</script>

<style scoped>

</style>
