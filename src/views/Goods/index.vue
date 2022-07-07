<template>
  <div>
    <VantBar />
  </div>
</template>

<script>
export default {
  name: 'Goods',
  mounted () {
    this.$store.dispatch('getGoodsInfo', { id: this.$route.query.id, openId: localStorage.getItem('openId') })
  }
}
</script>

<style>

</style>
