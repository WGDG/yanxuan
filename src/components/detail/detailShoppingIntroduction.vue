<template>
    <div class="detail-introduce">
      <div v-html="content"></div>
    </div>
</template>

<script>
export default {
   computed:{
     content() {
       return this.$store.state.content
     }
   }
}
</script>

<style scoped>

</style>
