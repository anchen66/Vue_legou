<template>
  <van-swipe class="my-swipe" :autoplay="3000"  @change="onChange">
    <van-swipe-item v-for="(item) in banner" :key="item.id">
      <img :src="item.image_url||item.img_url" />
    </van-swipe-item>
    <template #indicator>
    <div class="custom-indicator">{{ current + 1 }}/{{banner.length}}</div>
  </template>
  </van-swipe>
</template>

<script>
export default {
  name: 'Carousel',
  props: ['banner'],
  data () {
    return {
      current: 0
    }
  },
  methods: {
    onChange (index) {
      this.current = index
    }
  }
}
</script>

<style lang='scss' scoped>
.my-swipe {
  .van-swipe-item {
    color: #fff;
    font-size: 20px;
    width: 100%;
    height: 400px;
    line-height: 150px;
    text-align: center;

    img {
      width: 100%;
      height: 100%;
    }
  }
}

.custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
  }

</style>
