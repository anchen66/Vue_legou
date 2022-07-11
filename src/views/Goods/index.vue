<template>
  <div class="goods">
    <VantBar />
    <Carousel :banner="gallery"/>
    <div class="title">
      <p>￥{{info.retail_price}}</p>
      <p>{{info.name}}</p>
      <p>{{info.goods_brief}}</p>
    </div>
    <div class="promise">
      <div>30天无忧退款</div>
      <div>48小时快速退款</div>
      <div>满88元免邮费</div>
    </div>
    <div class="choose" @click="addCart">
      <div>请选择规格数量</div>
      <div></div>
    </div>
    <div class="info">
      <div class="info-title">商品参数</div>
      <li class="info-item" v-for="(item,index) in attribute" :key="index">
        <p>{{item.name}}</p>
        <p>{{item.value}}</p>
      </li>
    </div>
    <div ref="image" class="image"></div>
    <div class="issue">
      <div class="issue-title">
        <div>常见问题</div>
      </div>
      <div class="list">
        <li v-for="problem in issue" :key="problem.id">
          <div>{{problem.question}}</div>
          <div>{{problem.answer}}</div>
        </li>
      </div>
    </div>
    <div class="recommend">
      <div class="recommend-title">
        <div>大家都在看</div>
      </div>
      <div class="recommend-list">
        <li class="recommend-item" v-for="(product) in productList" :key="product.id">
          <a @click="goGoods(product.id)">
            <img :src="product.list_pic_url">
            <p>{{product.name}}</p>
            <p>￥{{product.retail_price}}</p>
          </a>
        </li>
      </div>
    </div>
    <div class="footer">
      <div :class="{noCol:!isCol,col:isCol}" @click="changeCol"></div>
      <div>
        <router-link to="/cart">
          <div class="num">{{goodsInfo.allnumber}}</div>
        </router-link>
      </div>
      <div></div>
      <div>立即购买</div>
      <div @click="addCart">加入购物车</div>
    </div>
    <div class="mask" v-if="show">
      <div class="box">
        <div class="top">
          <div class="left">
            <img :src="info.primary_pic_url">
            <div>
              <p>价格￥{{info.retail_price}}</p>
              <p>请选择数量</p>
            </div>
          </div>
          <div class="right" @click="close">X</div>
        </div>
        <p class="num">数量</p>
        <div class="chos-num">
          <button class="minus" @click="num--" :disabled="num<=1">-</button>
          <input type="text" @change="updateNum" v-model.number="num">
          <button class="add" @click="num++">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Goods',
  data () {
    return {
      isCol: false,
      num: 1,
      show: false
    }
  },
  mounted () {
    this.getData()
  },
  computed: {
    ...mapGetters(['goodsInfo', 'gallery', 'attribute', 'info', 'issue', 'productList'])
  },
  methods: {
    async getData () {
      await this.$store.dispatch('getGoodsInfo', { id: this.$route.query.id, openId: localStorage.getItem('openId') })
      this.$refs.image.innerHTML = this.goodsInfo.info.goods_desc || ''
      this.isCol = this.goodsInfo.collected
    },
    goGoods (id) {
      if (this.$route.query.id !== id) {
        this.$router.replace({
          path: '/goods',
          query: { id }
        })
      }
    },
    changeCol () {
      this.isCol = !this.isCol
    },
    updateNum () {
      if (this.num < 1) {
        this.num = 1
      } else if (this.num % 1 !== 0) {
        this.num = parseInt(this.num)
      }
    },
    close () {
      this.show = false
    },
    async addCart () {
      if (this.show === false) {
        this.show = true
      } else {
        try {
          await this.$store.dispatch('addCart', { goodsId: this.info.id + '', number: this.num + '', openId: localStorage.getItem('openId') })
          this.$store.dispatch('getGoodsInfo', { id: this.$route.query.id, openId: localStorage.getItem('openId') })
          this.show = false
        } catch (error) {
          alert(error.message)
        }
      }
    }
  },
  beforeRouteLeave (to, from, next) {
    if (this.isCol !== this.goodsInfo.collected) {
      try {
        this.$store.dispatch('addCollect', { goodsId: this.info.id + '', openId: localStorage.getItem('openId') })
        next()
      } catch (error) {
        next(false)
        alert(error.message)
      }
    } else {
      next()
    }
  }
}
</script>

<style scoped lang="scss">
.goods {
  width: 750px;

  .title {
    width: 100%;
    margin-top: 15px;
    background-color: #fff;

    p {
      width: 100%;
      padding: 5px 0;
      font-size: 24px;
      box-sizing: border-box;
      padding-left: 20px;
    }

    p:nth-child(1) {
      color: #b4282d;
    }

    p:nth-child(3) {
      font-size: 16px;
      color: #999;
    }
  }

  .promise {
    display: flex;
    font-size: 16px;
    color: #999;
    justify-content: space-evenly;

    div {
      height: 50px;
      line-height: 50px;
      position: relative;

      &::before{
        content: '';
        position: absolute;
        width: 25px;
        height: 25px;
        left: -30px;
        top: 28%;
        background: url('./images/dot.png') no-repeat;
        background-size: contain;
        border-radius: 50%;
      }
    }
  }

  .choose {
    width: 100%;
    display: flex;
    height: 78px;
    margin-bottom: 15px;
    padding: 0 15px;
    box-sizing: border-box;
    background-color: #fff;
    justify-content: space-between;

    div {
      font-size: 12px;
      line-height: 78px;
    }

    div:nth-child(2) {
      width: 30px;
      background: url('./images/arrow.png') no-repeat 0 45%;
      background-size: contain;
    }
  }

  .info {
    width: 100%;
    box-sizing: border-box;
    background-color: #fff;
    padding: 20px;

    .info-title {
      margin-bottom: 15px;
    }

    .info-item {
      display: flex;
      padding-left: 10px;
      margin: 15px 0;
      font-size: 12px;
      background-color: #f7f7f7;
      line-height: 54px;

      p:nth-child(1) {
        flex: 0 0 100px;
        font-size: 16px;
      }

      p:nth-chlid(2) {
        flex: 1;
      }
    }
  }

  .image {
    width: 100%;

    p {
      width: 100%;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .issue {
    width: 100%;
    box-sizing: border-box;
    padding: 0 21px;
    font-size: 18px;
    background-color: #fff;
    margin-bottom: 80px;

    .issue-title {
      padding: 25px 0;
      font-size: 12px;
      display: flex;
      justify-content: center;

      div {
        position: relative;

        &::after {
          content: '';
          display: block;
          width: 80px;
          height: 1px;
          position: absolute;
          top: 50%;
          right: -100px;
          background-color: #ccc;
        }

        &::before {
          content: '';
          display: block;
          width: 80px;
          height: 1px;
          position: absolute;
          top: 50%;
          left: -100px;
          background-color: #ccc;
        }
      }
    }

    .list {
      padding-left:12px;

      li {
        padding-bottom: 18px;

        div:nth-child(1) {
          height: 32px;
          line-height: 32px;
          position: relative;

          &::before {
            content: "";
            display: block;
            position: absolute;
            background: url('./images/dot2.gif') no-repeat center;
            background-size: 35px;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            top: 18%;
            left: -25px;
          }
        }

        div:nth-child(2) {
          color: #787878;
          line-height: 30px;
        }
      }
    }
  }

  .recommend {
    width: 100%;
    box-sizing: border-box;
    font-size: 12px;
    margin-bottom: 80px;

    .recommend-title {
      padding: 25px 0;
      display: flex;
      background-color: #fff;
      justify-content: center;
      margin-bottom: 10px;

      div {
        position: relative;

        &::after {
          content: '';
          display: block;
          width: 80px;
          height: 1px;
          position: absolute;
          top: 50%;
          right: -100px;
          background-color: #ccc;
        }

        &::before {
          content: '';
          display: block;
          width: 80px;
          height: 1px;
          position: absolute;
          top: 50%;
          left: -100px;
          background-color: #ccc;
        }
      }
    }

    .recommend-list {
      width: 530px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin: 0 auto;

      .recommend-item {
        width: 256px;
        padding-bottom: 8px;
        margin-bottom: 15px;
        background-color: #fff;

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
            padding: 12px 10px 4px;
          }

          p:nth-of-type(2) {
            color: #9c3232;
          }
        }
      }
    }
  }

  .footer {
    width: 100%;
    box-sizing: border-box;
    height: 75px;
    position: fixed;
    bottom: 0;
    background-color: #fff;
    z-index: 99;
    display: flex;

    div:nth-child(1),
    div:nth-child(2){
      flex: 0 0 120px;
      border: 1px #f4f4f4 solid;
    }

    div:nth-child(2) {
      position: relative;
      background: url('./images/cart.png') no-repeat center;
      background-size: 30px;

      a {
        display: block;
        width: 100%;
        height: 100%;

        .num {
          width: 25px;
          height: 25px;
          position: absolute;
          top: 10%;
          left: 55%;
          border-radius: 50%;
          color: #fff;
          background-color: #b4282d;
          font-size: 12px;
          text-align: center;
          line-height: 25px;
        }
      }
    }

    div:nth-child(3) {
      flex:1;
      border: 1px #f4f4f4 solid;
    }

    div:nth-child(4),
    div:nth-child(5) {
      flex: 0 0 150px;
      font-size: 12px;
      border: 1px #f4f4f4 solid;
      line-height: 75px;
      text-align: center;
    }

    div:nth-child(5) {
      background-color: #b4282d;
      color: #fff;
    }

    .noCol {
      background: url('./images/col.png') center no-repeat;
      background-size: 30px;
    }

    .col {
      background: url('./images/col-now.png') center no-repeat;
      background-size: 30px;
    }
  }

  .mask {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);

    .box {
      position: fixed;
      z-index: 19;
      bottom: 75px;
      width: 100%;
      box-sizing: border-box;
      padding: 21px;
      background-color: #fff;

      .top {
        display: flex;
        justify-content: space-between;
        margin-bottom: 25px;

        .left {
          display: flex;
          font-size: 12px;

          img {
            width: 130px;
            height: 130px;
            margin-right: 30px;
          }

          div {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;

            p:first-child {
              color: #b4282d;
            }
          }
        }

        .right {
          color: #999;
          width: 30px;
          height: 30px;
          line-height: 30px;
          text-align: center;
        }
      }

      .num {
        font-size: 12px;
        padding: 12px 0;
      }

      .chos-num {
        font-size: 36px;
        display: flex;

        .minus,.add {
          width: 40px;
          line-height: 40px;
          text-align: center;
          border: 0;
          background-color: #f2f3f5;
        }

        input {
          width: 50px;
          height: 40px;
          background-color: #f2f3f5;
          margin: 0 5px;
          border: 0;
          font-size: 22px;
          text-align: center;
        }
      }
    }
  }
}
</style>
