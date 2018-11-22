<template>
    <div class="personal-top">
      <ul>

        <router-link class="head-sculpture" :to="{ name: 'login' }" tag="li">
          <img src="../../assets/images/6_07.gif" alt="">
        </router-link>
        <li class="personal-name">
          <p class="name">初一</p>
          <p class="integral">积分：20</p>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "personal-top"
    }
</script>

<style scoped>

</style>
