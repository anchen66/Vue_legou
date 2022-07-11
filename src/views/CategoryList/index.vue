<template>
  <div class="categoryList">
    <VantBar />
    <van-tabs v-model="activeName" :swipeable=true @click="onClick">
      <van-tab :title="nav.name" :name="nav.id" v-for="(nav) in allCategoryNav" :key="nav.id">
        <div class="title">
          <p>{{nav.name}}</p>
          <p>{{currentNav.front_name}}</p>
        </div>
        <ul class="list">
          <li class="item" v-for="(item) in categoryList" :key="item.id">
            <router-link :to="{path:'/goods',query:{id:item.id}}">
              <img :src="item.list_pic_url">
              <p>{{item.name}}</p>
              <p>￥{{item.retail_price}}</p>
            </router-link>
          </li>
          <li v-if="categoryList.length%2 ===1" class="last-item"></li>
          <li v-if="categoryList.length ===0"> 服务器暂无数据</li>
        </ul>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CategoryList',
  data () {
    return {
      activeName: 0
    }
  },
  methods: {
    async intGetData () {
      await this.$store.dispatch('getCategoryNavId', this.$route.query.id)
      this.activeName = parseInt(this.nowCategoryNavId)
      this.getData()
    },
    getData () {
      this.$store.dispatch('getCategoryList', this.activeName)
    },
    onClick () {
      if (this.activeName !== parseInt(this.nowCategoryNavId)) {
        this.$router.replace({ path: '/categorylist', query: { id: this.activeName } })
        this.getData()
      }
    }
  },
  mounted () {
    // this.$store.dispatch('getCategoryNavId', this.$route.query.id)
    this.intGetData()
  },
  computed: {
    ...mapGetters(['nowCategoryNavId', 'allCategoryNav', 'currentNav', 'categoryList'])
  }
}
</script>

<style scoped lang="scss">
.categoryList {
  width: 750px;
}

.title {
  padding: 21px;
  background-color: #fff;
  margin: 14px 0 5px;

  p:nth-child(1) {
    font-size: 20px;
    line-height: 28px;
    padding: 21px 0 13px;
    text-align: center;
  }

  p:nth-child(2) {
    font-size: 18px;
    color: #999;
    padding: 15px;
    text-align: center;
  }
}

.list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  .item {
    width: 268px;
    height: 346px;
    background-color: #fff;
    margin-bottom: 5px;

    a {
      display: block;
      width: 100%;
      height: 100%;

      img {
        width: 217px;
        height: 217px;
        margin: 0 25px;
      }

      p {
          text-align: center;
          margin: 22px 0;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          font-size: 16px;
      }

      p:nth-of-type(2) {
        font-size: 20px;
        color: #b4282d;
      }
    }
  }

  .last-item {
    width: 268px;
    height: 346px;
  }
}
</style>
