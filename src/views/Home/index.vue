<template>
  <div class="home">
    <div class="header">
      <div class="header-adress">
        <a>郑州市</a>
      </div>
      <div class="header-search">
        <a>
          <div class="icon"></div>
          <div class="text" @click="goSearch">搜索商品</div>
        </a>
      </div>
    </div>
    <Carousel :banner="banner"/>
    <div class="channel">
      <li class="cahnnel-item" v-for="(item) in channel" :key="item.id">
        <a @click="goCategoryList(item.id)">
          <img :src="item.icon_url">
          <p>{{item.name}}</p>
        </a>
      </li>
    </div>
    <div class="brand">
      <div class="brand-top">品牌制造商直供</div>
      <div class="brand-content">
        <div class="brand-content-item" v-for="(brand) in brandList" :key="brand.id">
          <router-link :to="{path:'/branddetail',query:{id:brand.id}}">
            <p>{{brand.name}}</p>
            <p>{{brand.floor_price}}元起</p>
            <img :src="brand.new_pic_url">
          </router-link>
        </div>
      </div>
    </div>
    <HomeRecommend v-for="(list,index) in {newGoods,hotGoods}" :key="index" :index="index" :list="list"/>
    <div class="topicList">
      <div class="topList-top">
        专题精选
        <span></span>
      </div>
      <div class="topList-list">
        <ul>
          <li v-for="(topic) in topicList" :key="topic.id">
            <router-link :to="{path:'/topicdetail',query:{id:topic.id}}">
              <img :src="topic.item_pic_url">
              <div>
                <p>{{topic.title}}</p>
                <p>{{topic.price_info}}元起</p>
              </div>
              <p class="intr">{{topic.subtitle}}</p>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="newcategory">
        <NewcategoryList v-for="(category) in newCategoryList" :key="category.id" :category="category"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import HomeRecommend from './HomeRecommend'
import NewcategoryList from './NewcategoryList'
export default {
  name: 'Home',
  components: { HomeRecommend, NewcategoryList },
  mounted () {
    this.$store.dispatch('getHomeInfo')
  },
  computed: {
    ...mapGetters(['banner', 'brandList', 'channel', 'hotGoods', 'newCategoryList', 'newGoods', 'topicList'])
  },
  methods: {
    goCategoryList (id) {
      if (id === 1005002) {
        id = 1010000
        this.$router.push({ path: '/categorylist', query: { id: id } })
      } else {
        this.$router.push({ path: '/categorylist', query: { id: id } })
      }
    },
    goSearch () {
      this.$router.push({
        path: '/search'
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.home {
  width: 750px;
  height: 100%;
  padding-bottom: 70px;
  font-size: 12px;

  .header {
    width: 100%;
    height: 62px;
    background-color: #fff;
    padding-left: 10px;
    box-sizing: border-box;
    text-align: center;
    display: flex;
    position: fixed;
    top: 0;
    z-index: 99;

    .header-adress {
      height: 100%;
      width: 80px;

      a {
        display: block;
        width: 100%;
        height: 100%;
        line-height: 62px;
        text-align: center;

      }
    }

    .header-search {
      width: 310px;
      padding: 14px;

      a {
      display: flex;
      width: 100%;
      height: 100%;

        .icon {
          background: url('./images/search.png') no-repeat 5px;
          background-size: 25px 25px;
          width: 30px;
          height: 100%;
          padding-right: 5px;
        }

        .text {
          flex: 1;
          color: rgba(0, 0, 0, .3);
          text-align: left;
          line-height: 34px;
          font-size: 20px;
        }
      }
    }
  }

  .channel {
    width: 100%;
    height: 113px;
    padding: 14px 0;
    box-sizing: border-box;
    background-color: #fff;
    display: flex;

    li {
      flex:1;
      text-align: center;

      a {
        width: 100%;
        height: 100%;
        display: block;

        img {
          width: 41px;
          height: 41px;
          margin: 0 auto;
        }

        p {
          margin: 12px 0;
        }
      }
    }
  }

  .brand {
    width: 100%;
    background-color: #fff;
    margin-top: 14px;

    .brand-top {
      padding: 28px 0;
      text-align: center;
    }

    .brand-content {
      width: 526px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .brand-content-item {
        width: 260px;
        height: 170px;
        margin-bottom: 7px;
        position: relative;

        a {
          display: block;
          width: 100%;
          height: 100%;

            p {
            margin: 17px 0;
            position: relative;
            z-index: 2;
            padding-left: 5px;
          }

          p:nth-child(2) {
            font-size: 18px;
          }

          img {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
          }
        }
      }
    }
  }

  .topicList {
    margin-top: 14px;
    background-color: #fff;

    .topList-top {
      padding: 26px;
      line-height: 23px;
      text-align: center;

      span {
        background: url('./images/arrow.png') no-repeat;
        background-size: contain;
        display: inline-block;
        vertical-align: middle;
        width: 23px;
        height: 23px;
      }
    }

    .topList-list {
      overflow: auto;
      width: 100%;
      height: 360px;

      ul {
        height: 100%;
        display: flex;

        li {
          flex: 0 0 414px;
          margin-left: 18px;

          a {
            display: block;
            width: 414px;

            img {
              width: 100%;
              height: 234px;
              border-radius: 6px;
            }
            div {
              padding: 6px 0 21px;
              display: flex;
              line-height: 29px;
              justify-content: space-between;

              p:nth-child(1) {
                font-size: 20px;
                font-weight: 700;
              }

              p:nth-child(2) {
                font-size: 16px;
                color: #9c3232;
              }
            }

            .intr {
              line-height: 23px;
              font-size: 16px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
        }
      }
    }
  }

  .newcategory {
    width: 100%;
    box-sizing: border-box;
    padding: 14px 7px 18px;
    background-color: #f4f4f4;
  }
}
</style>
