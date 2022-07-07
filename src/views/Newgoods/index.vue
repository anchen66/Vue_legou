<template>
  <div class="newGoods">
    <VantBar />
    <div class="header">
    </div>
    <div class="sort">
      <div :class="{active:order===0}" @click="changeSort(0)">综合</div>
      <div :class="{asc:order==='asc',desc:order==='desc'}" @click="changeSort(2)">
        <div class="price">
          价格
        </div>
      </div>
      <div :class="{active:order===1}" @click="changeSort(1)">分类</div>
    </div>
    <div class="list">
      <li class="item" v-for="(newGoods) in newGoodsList" :key="newGoods.id">
        <router-link :to="{path:'/goods',query:{id:newGoods}}">
          <img :src="newGoods.list_pic_url">
          <p>{{newGoods.name}}</p>
          <p>￥{{newGoods.retail_price}}</p>
        </router-link>
      </li>
      <li class="last-item" v-if="newGoodsList.length%2===1"></li>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Newgoods',
  data () {
    return {
      order: 0
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      let order = this.order
      if (order === 0 || order === 1) {
        order = ''
      }
      if (this.$route.query.isWhat === 'isNew') {
        this.$store.dispatch('getNewgoodsList', { isHot: '', isNew: 1, order: order })
      } else {
        this.$store.dispatch('getNewgoodsList', { isHot: 1, isNew: '', order: order })
      }
    },
    changeSort (num) {
      if (num !== 2) {
        this.order = num
      } else {
        if (this.order === 'asc') {
          this.order = 'desc'
        } else {
          this.order = 'asc'
        }
      }
      this.getData()
    }
  },
  computed: {
    ...mapGetters(['newGoodsList'])
  }
}
</script>

<style scoped lang='scss'>
.newGoods {
  width: 750px;
}

.header {
  width: 100%;
  height: 200px;
  background: url('./images/R-C.jpg') no-repeat 0 -100px;
  background-size: 750px;
}

.sort {
  width: 100%;
  display: flex;
  font-size: 12px;

  div {
    flex: 1;
    width: 50px;
    text-align: center;
    line-height: 56px;
    height: 56px;
    background-color: #fff;

      .price {
      position: relative;
      width: fit-content;
      margin: 0 auto;

      &::after{
        content: '';
        display: block;
        background: url('./images/arrow.png') no-repeat;
        background-size: contain;
        width: 12px;
        height: 15px;
        position: absolute;
        top: 38%;
        right: -20px;
      }
    }
  }

  .asc {
    color: #b4282d;

    .price::after {
      background: url('./images/arrow-top.png') no-repeat;
      background-size: contain;
    }
  }

  .desc {
    color: #b4282d;

    .price::after {
      background: url('./images/arrow-bottom.png') no-repeat;
      background-size: contain;
    }
  }

  .active {
    color: #b4282d;
  }
}

.list {
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
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 100%;

      img {
        width: 200px;
        height: 200px;
      }

      p:nth-of-type(1) {
        width: 100%;
        text-align: center;
        padding: 10px 0 15px;
        font-size: 18px;
      }

      p:nth-of-type(2) {
        width: 100%;
        text-align: center;
        padding: 20px 0 25px;
        font-size: 20px;
        color: #b4282d;
      }
    }
  }

  .last-item {
    width: 270px;
    height: 50px;
  }
}
</style>
