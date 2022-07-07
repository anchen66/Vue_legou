<template>
  <div class="recommend">
    <div class="recommend-top">
      <div>
        <p>{{index==='newGoods'?'新品首发':'人气推荐-好物精选'}}</p>
        <router-link :to="{path:'/newgoods',query:{isWhat:isWhat}}">查看全部</router-link>
      </div>
    </div>
    <div class="recommend-list">
      <ul>
        <li v-for="(item) in list" :key="item.id">
          <router-link :to="{path:'/goods',query:{id:item.id}}">
            <img :src="item.list_pic_url">
            <p>{{item.name}}</p>
            <p>{{item.goods_brief}}</p>
            <p>￥{{item.retail_price}}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  props: ['index', 'list'],
  computed: {
    isWhat () {
      return this.index === 'newGoods' ? 'isNew' : 'isHot'
    }
  }
}
</script>

<style scoped lang="scss">
.recommend {
  margin-top: 14px;
  width: 750px;

  .recommend-top {
    width: 100%;
    height: 187px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('./images/OIP-C.jpg') no-repeat 0 -200px;
    background-size: 750px;

    div {
      height: 113px;
      text-align: center;
      color: #8c9bae;

      p {
        font-size: 22px;
        line-height: 30px;
        margin: 23px 0;
      }

      a {
        font-size: 16px;
        display: block;
        width: 130px;
        line-height: 36px;
        margin: 0 auto;
        color: #8c9bae;
        background-color: #d8e4f0;
      }
    }
  }

  .recommend-list {
    width: 100%;
    overflow: auto;
    margin-top: 14px;
    height: 347px;
    padding-bottom: 7px;
    display: flex;
    background-color: #fff;

    ul {
      height: 100%;
      display: flex;

      li {
        height: 300px;
        width: 202px;
        margin: 3.6px 0 3.6px 18px;
        position: relative;
        border-left: 1px rgba(0, 0, 0, .1) solid;

        a {
          display: block;
          width: 100%;
          height: 347px;
          img {
            width: 202px;
            height: 202px;
          }

          p {
            margin: 6px 20px 15px;
            text-overflow: ellipsis;
            font-size: 22px;
            overflow: hidden;
            white-space: nowrap;
          }

          p:nth-of-type(1) {
            height: 28px;
            font-weight: 700;
          }

          p:nth-of-type(2) {
            font-size: 16px;
            color: #8a8a8a;
          }

          p:nth-of-type(3) {
            font-size: 16px;
            color: #9c3232;
          }
        }
      }

      li:nth-child(1) {
        border: 0px;
      }
    }
  }
}
</style>
