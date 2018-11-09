<template>
    <div class="strict-list">
      <ul>
        <li v-for="(item, index) in specialList" :key="index">
          <img :src="item.pic" alt="">
          <div class="strict-list-content">
            {{ item.title }}
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  data(){
    return{
      specialList:[]
    }
  },
  computed(){
    let { specialList } = this.$store.state
    return specialList
  }
}
</script>

<style scoped>

</style>
