<template>
  <div class="cart">
    <div class="cart-header">
      <div>30天无忧退货</div>
      <div>48小时快速退货</div>
      <div>满88元免邮</div>
    </div>
    <div class="cart-list">
      <van-checkbox-group v-model="result" ref="checkboxGroup">
        <van-swipe-cell class="cart-item" v-for="(item) in cartList" :key="item.id">
          <div class="content">
            <div class="left-box">
              <van-checkbox :name="item.goods_id" @click="changeCheckAll" class="checked"></van-checkbox>
              <img :src="item.list_pic_url">
              <div class="info">
                <p>{{item.goods_name}}</p>
                <p>￥{{item.retail_price}}</p>
              </div>
            </div>
            <div class="num">x{{item.number}}</div>
          </div>
          <template #right>
            <van-button square type="danger" text="删除" class="del" @click="del(item.id)"/>
          </template>
        </van-swipe-cell>
      </van-checkbox-group>
    </div>
    <div class="bottom">
      <div class="left">
        <van-checkbox type="primary" @click="checkAll" v-model="checked" class="checked">全选</van-checkbox>
      </div>
      <div class="right">
        <div class="price">￥{{total}}</div>
        <div class="buy" @click="buy">下单</div>
      </div>
    </div>
    <div class="mask" v-show="isShow">
      <div class="box">
        <div class="title">请确定是否删除商品</div>
        <div class="mask-bottom">
          <div class="cancel" @click="isDel(false)">取消</div>
          <div class="sure" @click="isDel(true)">确定</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Cart',
  data () {
    return {
      total: 0,
      result: [],
      checked: false,
      isShow: false,
      id: 0
    }
  },
  methods: {
    checkAll () {
      this.$refs.checkboxGroup.toggleAll(this.checked)
      let price = 0
      if (this.checked) {
        this.cartList.forEach(item => {
          price += item.number * item.retail_price
        })
      } else {
        price = 0
      }
      this.total = price
    },
    changeCheckAll () {
      if (this.cartList.length === 0) {
        this.checked = false
      } else if (this.cartList.length === this.result.length) {
        this.checked = true
      } else {
        this.checked = false
      }
      let price = 0
      this.result.forEach(item => {
        const index = this.cartList.findIndex(list => list.goods_id === item)
        price += this.cartList[index].number * this.cartList[index].retail_price
      })
      this.total = price
    },
    del (id) {
      this.id = id
      this.isShow = true
    },
    async isDel (isSure) {
      if (isSure) {
        const index = this.cartList.findIndex(item => item.id === this.id)
        console.log(index)
        try {
          await this.$store.dispatch('minusCart', this.cartList[index].id)
          this.getData()
          this.isShow = false
        } catch (error) {
          alert(error.message)
        }
      } else {
        this.isShow = false
      }
    },
    async buy () {
      const goodsId = this.result.join(',')
      if (this.result.length === 0) {
        alert('请选择商品')
      } else {
        try {
          await this.$store.dispatch('submitOrder', { allPrise: this.total, goodsId, openId: localStorage.getItem('openId') })
          this.$router.push({ path: '/order' })
        } catch (error) {
          alert(error.message)
        }
      }
    },
    getData () {
      this.$store.dispatch('getCartList', localStorage.getItem('openId'))
    }
  },
  mounted () {
    this.getData()
  },
  computed: {
    ...mapGetters(['cartList'])
  }
}
</script>

<style lang='scss' scoped>
.cart {
  width: 750px;

  .cart-header {
    width: 100%;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    padding: 21px 15px;
    font-size: 18px;
    color: #666;

    div {
      position: relative;

      &::before {
        content: '';
        display: block;
        width: 15px;
        height: 15px;
        background: url('./images/dot.png') no-repeat center;
        background-size: 15px;
        border-radius: 50%;
        position: absolute;
        top: 20%;
        left: -15px;
      }
    }
  }

  .cart-list {
    box-sizing: border-box;
    width: 100%;
    background-color: #fff;
    padding: 0 15px;
    margin-bottom: 145px;

    .cart-item {
      width: 100%;
      border-bottom: 1px solid #f4f4f4;

      .content {
        width: 100%;
        padding: 30px 0;
        font-size: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .left-box {
          display: flex;

          .checked {
            width: 30px;
            height: 30px;
            margin-top: 30px;
            margin-right: 10px;
          }

          img {
            width: 90px;
            height: 90px;
            background-color: #f4f4f4;
          }

          .info {
            p {
              line-height: 30px;
              padding: 12px 0 0 15px;
            }
          }
        }

        .num {
          padding-right: 30px;
        }
      }

      .del {
        width: 86px;
        height: 100%;
        margin-left: 3px;
        padding: 0;
        font-size: 16px;
      }
    }
  }

  .bottom {
    width: 100%;
    box-sizing: border-box;
    position: fixed;
    z-index: 99;
    bottom: 70px;
    background-color: #fff;
    height: 70px;
    border-bottom: 1px solid #f4f4f4;
    display: flex;
    justify-content: space-between;

    .left {
      .checked {
            width: fit-content;
            height: 30px;
            margin-top: 20px;
            margin-left: 20px;
            font-size: 12px;
          }
    }

    .right {
      display: flex;

      .price {
        color: #b4282d;
        font-size: 12px;
        line-height: 70px;
        padding-right: 20px ;
      }

      .buy {
        background-color: #b4282d;
        color: #fff;
        width: 120px;
        text-align: center;
        line-height: 70px;
      }
    }
  }

  .mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    background-color: rgba(0,0,0,.7);

    .box {
      position: fixed;
      width: 460px;
      height: 220px;
      border-radius: 6px;
      background-color: #fff;
      top: 50%;
      left: 50%;
      transform: translate(-50% , -50%);
      font-size: 26px;
      text-align: center;

      .title {
        margin-top: 70px;
        color: #b4282d;
      }

      .mask-bottom {
        position: absolute;
        width: 100%;
        bottom: 0;
        height: 70px;
        line-height: 70px;
        border-top: 1px solid rgba(0, 0, 0, .1);
        display: flex;

        div {
          flex: 1;
        }

        div:nth-child(2) {
          border-left: 1px solid rgba(0, 0, 0, .1);
          color: #b4282d;
        }
      }
    }
  }
}
</style>
