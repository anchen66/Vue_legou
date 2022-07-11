<template>
  <div class="order">
    <VantBar />
    <div class="address">
      <div class="address-header"></div>
      <div class="address-content">
        <div class="name">{{address.name}}</div>
        <div class="detail">
          <p>{{address.mobile}}</p>
          <p>{{address.address_detail}}</p>
        </div>
        <div class="more">
          <router-link to="/addressSelect"></router-link>
        </div>
      </div>
    </div>
    <div class="money">
      <div>
        <p>商品合计</p>
        <p>￥{{allPrise}}</p>
      </div>
      <div>
        <p>运费</p>
        <p>免运费</p>
      </div>
      <div>
        <p>优惠券</p>
        <p>暂无</p>
      </div>
    </div>
    <div class="list">
      <li v-for="item in goodsList" :key="item.id">
        <img :src="item.list_pic_url">
        <div class="info">
          <p>{{item.goods_name}}</p>
          <p>￥{{item.retail_price}}</p>
        </div>
        <div class="num">x{{item.number}}</div>
      </li>
    </div>
    <div class="bottom">
      <div class="left-box">实付: ￥{{allPrise}}</div>
      <div class="right-box">支付</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Order',
  mounted () {
    this.$store.dispatch('getOrderDetail', { openId: localStorage.getItem('openId'), addressId: '' })
  },
  computed: {
    ...mapGetters(['goodsList', 'address', 'allPrise'])
  }
}
</script>

<style scoped lang="scss">
.order {
  width: 750px;

  .address {
    background-color: #fff;
    font-size: 12px;

    .address-header {
      width: 100%;
      height: 10px;
      background: url('./images/bgc.png');
      background-size: contain;
    }

    .address-content {
      padding: 21px 15px;
      box-sizing: border-box;
      display: flex;
      align-items: center;

      .name {
        text-align: center;
        flex: 0 72px;
        line-height: 66px;
      }

      .detail {
        flex: 1;
        padding: 0 15px;

        p {
          padding: 6px 0;
        }
      }

      .more {
        width: 40px;
        height: 40px;
        background: url('./images/arrow.png') center no-repeat;
        background-size: 30px;
        margin: 0 14px;

        a {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .money {
    margin-top: 15px;
    background-color: #fff;
    padding: 0 15px;
    box-sizing: border-box;
    font-size: 12px;

    div {
      display: flex;
      justify-content: space-between;
      padding: 21px 0;
    }

    div:nth-child(2) {
      border-top: 1px solid rgba(0, 0, 0, .1);
      border-bottom: 1px solid rgba(0, 0, 0, .1);
    }
  }

  .list {
    margin-top: 15px;
    margin-bottom: 85px;

    li {
      padding: 15px 36px 15px 15px;
      background-color: #fff;
      display: flex;
      align-items: center;
      font-size: 12px;
      border-bottom: 1px solid rgba(0, 0, 0, .1);

      img {
        width: 90px;
        height: 90px;
        background-color: #f4f4f4;
      }

      .info {
        flex: 1;
        padding: 15px;

        p {
          padding: 6px 0;
        }
      }
    }
  }

  .bottom {
    width: 100%;
    height: 72px;
    box-sizing: border-box;
    padding-left: 15px;
    background-color: #fff;
    position: fixed;
    display: flex;
    justify-content: space-between;
    bottom: 0;

    .left-box {
      font-size: 12px;
      line-height: 72px;
    }

    .right-box {
      width: 145px;
      height: 100%;
      line-height: 72px;
      text-align: center;
      background-color: #b4282d;
      color: #fff;
    }
  }
}
</style>
