<template>
    <div class="detail-introduce">
      <div v-html="content"></div>
    </div>
</template>

<script>
export default {
   data(){
     return{
       content:''
     }
   },
  created(){
     let { content } = this.$store.state
    this.content = content
  }
}
</script>

<style scoped>

</style>
