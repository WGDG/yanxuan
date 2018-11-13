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
  computed: {
    specialList(){
      return this.$store.state.specialList
    }
  }
}
</script>

<style scoped>

</style>
