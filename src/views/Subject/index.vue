<template>
  <div class="subject">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="item in list" :key="item.id">
        <template v-slot>
          <div class="list">
            <router-link :to="{path:'/topicdetail',query:{id:item.id}}">
              <img :src="item.scene_pic_url">
              <p>{{item.title}}</p>
              <p>{{item.subtitle}}</p>
              <p>{{item.price_info}}元起</p>
            </router-link>
          </div>
        </template>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Subject',
  data () {
    return {
      page: 1,
      loading: false,
      finished: true
    }
  },
  methods: {
    onLoad () {
      this.loading = true
      if (this.page < this.total) {
        this.page++
        this.getData()
      } else {
        this.finished = true
      }
    },
    async getData () {
      await this.$store.dispatch('getTopicListInfo', this.page)
      this.finished = false
      this.loading = false
      this.$toast.loading({
        message: '加载中...',
        duration: 300
      })
    }
  },
  computed: {
    ...mapGetters(['total', 'list'])
  },
  mounted () {
    this.getData()
  },
  beforeRouteLeave (to, from, next) {
    this.$store.commit('CLEARLIST')
    this.page = 1
    next()
  }
}
</script>

<style lang='scss' scoped>
.subject {
  width: 750px;
  padding-bottom: 70px;

  .list {
    width: 100%;
    margin-bottom: 5px;

    a {
      display: block;
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 300px;
        border-radius: 6px;
      }

      p {
        width: 100%;
        text-align: center;
        line-height: 1;
        padding: 11px 0 17px;
      }

      p:nth-of-type(1) {
        font-size: 24px;
      }

      p:nth-of-type(2) {
        font-size: 16px;
        color: #999;
      }

      p:nth-of-type(3) {
        font-size: 18px;
        color: #b4282d;
      }
    }
  }
}
</style>
