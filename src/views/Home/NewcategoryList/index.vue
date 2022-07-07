<template>
  <div class="list">
    <div class="list-top">
      {{category.name}}好物
    </div>
    <div class="list-item">
      <li v-for="goods in category.goodsList" :key="goods.id" class="item">
        <router-link :to="{path:'/goods',query:{id:goods.id}}">
          <img :src="goods.list_pic_url">
          <p>{{goods.name}}</p>
          <p>￥{{goods.retail_price}}</p>
        </router-link>
      </li>
      <li class="more">
        <router-link :to="{path:'/categorylist',query:{id:category.id}}">
          <p>{{category.name}}好物</p>
          <div></div>
        </router-link>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewcategoryList',
  props: ['category']
}
</script>

<style scoped lang="scss">
  .list {
    width: 100%;

    .list-top {
      text-align: center;
      padding: 18px 0;
    }

    .list-item {
      width: 580px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      .item {
        width: 280px;
        height: 300px;
        background-color: #fff;
        margin-bottom: 7px;

        a {
          display: block;
          width: 100%;
          height: 100%;

          img {
            width: 210px;
            height: 210px;
            margin: 0 35px;
          }

          p {
            padding-left: 20px;
            margin: 5px 0 3px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          p:nth-of-type(2) {
            color: #9c3232;
          }
        }
      }

      .more {
        width: 280px;
        height: 300px;
        background-color: #fff;
        margin-bottom: 7px;

        a {
          display: block;
          width: 100%;
          height: 100%;

          p {
            font-size: 22px;
            text-align: center;
            margin-top: 60px;
            margin-bottom: 40px;
          }

          div {
            background: url('./images/forward.png');
            width: 50px;
            height: 50px;
            background-size: contain;
            margin: 0 auto;
          }
        }
      }
    }
  }
</style>
