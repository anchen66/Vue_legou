<template>
  <div class="class">
    <div class="class-header">
      <div class="serch">
        <router-link to="/search">商品搜索,共250款好物</router-link>
      </div>
    </div>
    <div class="class-content">
      <div ref="slidebar" class="slidebar">
        <li
        class="slidebar-item"
        v-for="(list) in classList" :key="list.id"
        :class="{active:classDetailList.id ===list.id}"
        @click="tab(list.id)">
          {{list.name}}
        </li>
      </div>
      <div class="right-box">
        <div class="banner">
          <img :src="classDetailList.banner_url">
        </div>
        <p class="title">—{{classDetailList.name}}分类—</p>
        <div class="main">
          <li v-for="(item) in classDetailList.subList" :key="item.id">
            <router-link :to="{path:'/categorylist',query:{id:item.id}}">
              <img :src="item.wap_banner_url">
              <p>{{item.name}}</p>
            </router-link>
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Class',
  mounted () {
    document.body.style.backgroundColor = '#ffffff'
    this.intGerData()
    const height = document.documentElement.clientHeight
    this.$refs.slidebar.style.height = height - 140 + 'px'
  },
  methods: {
    async intGerData () {
      await this.$store.dispatch('getClassList')
      this.$store.dispatch('getClassDetail', this.classList[0].id)
    },
    tab (id) {
      this.$store.dispatch('getClassDetail', id)
    }
  },
  computed: {
    ...mapGetters(['classList', 'classDetailList'])
  },
  beforeRouteLeave (to, from, next) {
    document.body.style.backgroundColor = '#f4f4f4'
    next()
  }
}
</script>

<style lang='scss' scoped>
.class {
  width: 750px;
  background-color: #fff;

  .class-header {
    width: 750px;
    height: 65px;
    display: flex;
    position: fixed;
    background-color: #fff;
    top: 0;
    z-index: 99;
    justify-content: center;
    align-items: center;
    border-bottom: 1px #ededed solid;

    .serch {
      width: 80%;
      height: 40px;
      background-color: #ededed;
      border-radius: 6px;
      text-align: center;
      font-size: 12px;
      line-height: 40px;

      a {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }

  .class-content {
    width: 100%;
    box-sizing: border-box;
    padding-bottom: 70px;
    margin-top: 66px;

    .slidebar {
      width: 120px;
      font-size: 20px;
      background-color: #fff;
      overflow: auto;
      position: fixed;
      height: 540px;
      top: 66px;

      .slidebar-item {
        width: 100%;
        text-align: center;
        line-height: 65px;
      }

      .active {
        color: #ab2b2b;
        font-size: 26px;
        border-left: #ab2b2b 4px solid;
        box-sizing: border-box;
      }
    }

    .right-box {
      margin-left: 120px;
      border-left: #ededed 1px solid;
      box-sizing: border-box;

      .banner{
        width: 100%;

        img {
          width: 100%;
        }
      }

      .title {
        text-align: center;
        width: 100%;
        padding: 36px 0;
        font-size: 16px;
      }

      .main {
        display: flex;
        flex-wrap: wrap;

        li {
          flex: 0 0 33.3%;
          margin-bottom: 10px;
          font-size: 12px;

          a {
            display: block;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;

            img {
              width: 120px;
            }

            p {
              width: 100%;
              text-align: center;
            }
          }
        }
      }
    }
  }
}
</style>
