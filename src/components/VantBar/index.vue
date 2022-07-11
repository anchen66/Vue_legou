<template>
  <van-nav-bar
      title="不凡"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      :fixed="true"
      :placeholder='true'
    />
</template>

<script>
export default {
  name: 'VantBar',
  methods: {
    onClickLeft () {
      this.$router.back()
    }
  }
}
</script>

<style>
.van-nav-bar {
  z-index: 99;
}
</style>
