<template>
  <div class="topicDetail">
    <VantBar />
    <div class="pict">
      <img src="./images/topic1.jpg">
      <img src="./images/topic2.jpg">
      <img src="./images/topic3.jpg">
      <img src="./images/topic4.jpg">
      <img src="./images/topic5.jpg">
      <img src="./images/topic6.jpg">
      <img src="./images/topic7.jpg">
    </div>
    <div class="list">
      <div class="title">专题推荐</div>
      <div class="item" v-for="(item) in topicDetailList.recommendList" :key="item.id" @click="gogogo(item.id)">
          <img :src="item.scene_pic_url">
          <p>{{item.title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Topicdetail',
  mounted () {
    this.$store.dispatch('getTopicDetailList', this.$route.query.id)
  },
  computed: {
    ...mapGetters(['topicDetailList'])
  },
  methods: {
    gogogo (id) {
      this.$router.replace({
        path: '/topicdetail',
        query: { id }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.topicDetail {
  width: 750px;

  .pict {
    width: 100%;

    img {
      width: 100%;
      display: block;
    }
  }

  .list {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;

    .title {
      color: #999;
      padding: 21px 0;
      margin-bottom: 20px;
    }

    .item {
      width: 460px;
      padding: 17px 17px 21px;
      background-color: #fff;
      margin-bottom: 20px;

      img {
        width: 460px;
        height: 200px;
      }

      p {
        width: 100%;
        padding: 20px 0;
      }
    }
  }
}
</style>
