<template>
  <div class="brandDetail">
    <VantBar />
    <div class="header">
      <div class="header-name">
        <div>{{brandDetailInfo.name}}</div>
      </div>
      <div class="header-info">
        {{brandDetailInfo.simple_desc}}
      </div>
    </div>
    <div class="goodsList">
      <li class="item" v-for="(good) in goodsList" :key="good.id">
        <router-link :to="{path:'/goods',query:{id:good.id}}">
          <img :src="good.list_pic_url">
          <p>{{good.name}}</p>
          <p>￥ {{good.retail_price}}</p>
        </router-link>
      </li>
      <li class="last-item" v-if="goodsList.length%2===1"></li>
      <li class="none" v-if="goodsList.length === 0">
        数据库暂无数据
      </li>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Branddetail',
  mounted () {
    this.$store.dispatch('getBrandDetailList', this.$route.query.id)
  },
  computed: {
    ...mapGetters(['brandDetailList']),
    brandDetailInfo () {
      return this.brandDetailList.data || {}
    },
    goodsList () {
      return this.brandDetailList.goodsList || []
    }
  }
}
</script>

<style scoped lang="scss">
.brandDetail {
  width: 750px;
}

.header{

  .header-name {
    background: url('./images/Ew7FSA7UYAE0UeC.jpg') no-repeat 0 -250px;
    background-size: 750px;
    width: 100%;
    height: 210px;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      font-size: 26px;
      border-bottom: 3px solid #fff;
      width: fit-content;
      color: #fff;
    }
  }

  .header-info {
    padding: 30px 22px;
    background-color: #fff;
    text-align: center;
    color: #666;
    font-size: 22px;
  }
}

.goodsList {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 15px;

  .item {
    width: 270px;
    background-color: #fff;
    margin-bottom: 5px;

    a {
      display: block;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        width: 220px;
        margin: 0 auto;
      }

      p:nth-of-type(1) {
        width: 100%;
        font-size: 16px;
        text-align: center;
        padding: 10px 0 15px;
      }

      p:nth-of-type(2) {
        width: 100%;
        font-size: 20px;
        color: #b4282d;
        padding: 21px 0;
        text-align: center;
      }
    }
  }

  .last-item {
    width: 270px;
    height: 50px;
  }
}
</style>
