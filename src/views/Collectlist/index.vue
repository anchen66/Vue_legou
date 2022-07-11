<template>
  <div class="collectlist">
    <VantBar />
    <div class="collectlist-header">我的收藏</div>
    <div class="collectlist-list">
      <li class="item" v-for="item in collectList" :key="item.id">
        <router-link :to="{path:'/goods',query:{id:item.id}}">
          <img :src="item.list_pic_url">
          <p>{{item.name}}</p>
          <p>￥{{item.retail_price}}</p>
        </router-link>
      </li>
      <li class="last-item" v-if="collectList.length%2 ===1"></li>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Collectlist',
  mounted () {
    this.$store.dispatch('getCollectList', localStorage.getItem('openId'))
  },
  computed: {
    ...mapGetters(['collectList'])
  }
}
</script>

<style scoped lang="scss">
.collectlist {
  width: 750px;

  .collectlist-header {
    width: 100%;
    font-size: 26px;
    line-height: 62px;
    text-align: center;
    margin-top: 5px;
    background-color: #fff;
    font-weight: 900;
    border-bottom: rgba(0, 0, 0, .1);
  }

  .collectlist-list {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .item {
      width: 260px;
      margin: 10px 20px;
      background-color: #fff;
      padding-bottom: 15px;

      a {
        display: block;
        width: 100%;
        height: 100%;

        img {
          width: 220px;
          height: 220px;
          margin: 0 auto;
        }

        p {
          width: 100%;
          box-sizing: border-box;
          padding-left: 15px;
          font-size: 12px;
          margin-top: 12px;
        }

        p:nth-of-type(2) {
          color: #9c3232;
        }
      }
    }

    .last-item {
      width: 260px;
      height: 50px;
      margin: 10px 20px;
    }
  }
}
</style>
