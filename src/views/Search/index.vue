<template>
  <div class="search">
    <VantBar />
    <div class="header">
      <div class="left-box">
        <div class="icon"></div>
        <input
        type="text"
        placeholder="商品搜索"
        v-model="keyword"
        @input="search"
        @click="showSuggest">
      </div>
      <div class="right-box" @click="clear">
        取消
      </div>
      <div
      class="suggest"
      v-show="keyword.length !== 0&&show &&searchGoods.length !== 0">
        <li
        v-for="keywords in searchGoods"
        :key="keywords.id"
        @click="changeKeyword(keywords.name)">
        {{keywords.name}}
        </li>
      </div>
    </div>
    <div class="history" v-if="this.history.length !== 0 &&this.keyword.length === 0">
      <div class="history-header">
        <div class="history-title">历史记录</div>
        <div class="history-icon" @click="clearHistory"></div>
      </div>
      <div class="history-list">
        <div
        v-for="item in history"
        :key="item.id"
        @click="goSearch(item.keyword)">
        {{item.keyword}}
        </div>
      </div>
    </div>
    <div class="hot" v-if="this.keyword.length === 0">
      <div class="hot-header">热门搜索</div>
      <div class="hot-list">
        <div
        v-for="(list,index) in hotKeywordList"
        :key="index" :class="{active:list.is_hot}"
        @click="goSearch(list.keyword)">
          {{list.keyword}}
        </div>
      </div>
    </div>
    <div class="search-list" v-if="this.keyword.length !== 0" @click="hidden">
      <div class="list-header">
        <div :class="{active:order === ''}" @click="sort('')">综合</div>
        <div
        :class="{active:order !== '',asc:order === 'asc',desc:order === 'desc'}"
        class="price"
        @click="sort('ok')">
          <p>价格</p>
          <span></span>
        </div>
      </div>
      <div class="list-item">
        <li
        class="item"
        v-for="(goods) in searchGoods"
        :key="goods.id">
          <a>
            <img :src="goods.list_pic_url">
            <p>{{goods.name}}</p>
            <p>￥{{goods.retail_price}}</p>
          </a>
        </li>
        <li class="last-item" v-if="searchGoods.length%2 === 1"></li>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Search',
  data () {
    return {
      keyword: '',
      show: false,
      order: ''
    }
  },
  methods: {
    search () {
      this.$store.dispatch('getSearchHelper', { keyword: this.keyword, order: this.order })
    },
    showSuggest () {
      this.show = true
    },
    // 隐藏关键词
    hidden () {
      this.show = false
    },
    // 点击关键词进行搜集
    changeKeyword (name) {
      this.keyword = name
      this.show = false
      this.$store.dispatch('AddHistory', { keyword: this.keyword, openId: localStorage.getItem('openId') })
      this.$store.dispatch('getSearchIndexaction', localStorage.getItem('openId'))
      this.search()
    },
    // 点击热点搜索或历史记录前往搜索功能
    goSearch (keyword) {
      this.keyword = keyword
      this.search()
      this.show = false
    },
    // 清空搜索框内容
    clear () {
      this.keyword = ''
    },
    // 清除搜索历史
    async clearHistory () {
      try {
        await this.$store.dispatch('clearHistory', localStorage.getItem('openId'))
        this.$store.dispatch('getSearchIndexaction', localStorage.getItem('openId'))
      } catch (error) {
        alert(error.message)
      }
    },
    // 实现排序功能
    sort (order) {
      if (order === '') {
        if (this.order !== '') {
          this.order = ''
          this.search()
        }
      } else {
        if (this.order !== 'asc') {
          this.order = 'asc'
        } else {
          this.order = 'desc'
        }
        this.search()
      }
    }
  },
  mounted () {
    this.$store.dispatch('getSearchIndexaction', localStorage.getItem('openId'))
  },
  computed: {
    ...mapGetters(['history', 'hotKeywordList', 'searchGoods'])
  }
}
</script>

<style scoped lang="scss">
.search {
  width: 750px;

  .header {
    width: 100%;
    padding: 15px 18px;
    box-sizing: border-box;
    display: flex;
    background-color: #fff;
    position: relative;

    .suggest {
      position: absolute;
      top: 75px;
      left: 20%;
      padding: 15px;
      background-color: #fff;
      width: 60%;
      border: 1px solid rgba(0, 0, 0, .1);
      box-sizing: border-box;
      max-height: 420px;
      overflow: auto;

      li {
        font-size: 16px;
        padding: 15px;
      }
    }

    .left-box {
      background-color: #f4f4f4;
      flex: 1;
      height: 50px;
      padding-left: 18px;
      display: flex;

      .icon {
        width: 30px;
        height: 100%;
        background: url('./images/search.png') no-repeat center;
        background-size: 25px;
      }

      input {
        flex: 1;
        background-color: #f4f4f4;
        border: 0;
        text-indent: 1em;
        font-size: 18px;
      }
    }

    .right-box {
      line-height: 50px;
      padding: 0 12px;
      font-size: 20px;
    }
  }

  .history {
    padding: 23px;
    box-sizing: border-box;
    background-color: #fff;
    margin-top: 10px;
    font-size: 12px;

    .history-header {
      display: flex;
      justify-content: space-between;
      padding-bottom: 21px;

      .history-icon{
        width: 40px;
        height: 40px;
        background: url('./images/del.png') no-repeat center;
        background-size: 30px;
      }

      .history-title {
        line-height: 40px;
      }
    }

    .history-list {
      display: flex;
      flex-wrap: wrap;

      div {
        padding: 7px;
        border: 1px solid #999;
        margin-right: 21px;
        margin-bottom: 15px;
      }
    }
  }

  .hot {
    margin-top: 15px;
    padding: 23px;
    box-sizing: border-box;
    background-color: #fff;
    font-size: 12px;

    .hot-header {
      margin-bottom: 21px;
    }

    .hot-list {
      display: flex;
      flex-wrap: wrap;

      div {
        padding: 7px;
        border: 1px solid #999;
        margin-right: 21px;
        margin-bottom: 15px;
      }

      .active {
        color: #b4282d;
        border: 1px solid #b4282d;
      }
    }
  }

  .search-list {
    margin-bottom: 20px;

    .list-header {
      display: flex;
      font-size: 16px;
      margin-top: 5px;
      background-color: #fff;

      div {
        flex: 1;
        line-height: 57px;
        text-align: center;
      }

      .active {
        color: #b4282d;
      }

      .price {
        display: flex;
        justify-content: center;
        span {
          display: block;
          margin-top: 15px;
          margin-left: 5px;
          width: 15px;
          height: 25px;
          background: url('./images/arrow.png') no-repeat center;
          background-size: contain;
        }
      }

      .asc {
        span {
          background: url('./images/arrow-top.png') no-repeat center;
          background-size: contain;
        }
      }

      .desc {
        span {
          background: url('./images/arrow-bottom.png') no-repeat center;
          background-size: contain;
        }
      }
    }

    .list-item {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      margin-top: 10px;
      justify-content: center;

      .item {
        width: 280px;
        background-color: #fff;
        margin: 5px;
        font-size: 12px;
        padding-bottom: 10px;

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
            margin: 12px 0 3px;
            box-sizing: border-box;
            width: 100%;
            padding-left: 10px;
          }
        }
      }

      .last-item {
        width: 280%;
        height: 50px;
        margin: 5px;
      }
    }
  }
}
</style>
