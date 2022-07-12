<template>
  <div class="addressSelect">
    <VantBar />
    <div class="addressSelect-content">
      <van-swipe-cell class="item" v-for="item in addressList" :key="item.id">
        <div class="main">
          <div class="name">
            <div class="text">{{item.name}}</div>
            <div class="isDefault" :class="{hidden:item.is_default===0}">默认</div>
          </div>
          <div class="info">
            <p>{{item.mobile}}</p>
            <p>{{item.address_detail}}</p>
          </div>
          <div class="changeInfo">
            <router-link :to="{path:'/addaddress',query:{id:item.id}}"></router-link>
          </div>
        </div>
        <template #right>
          <van-button square type="danger" text="删除" class="del" @click="del(item.id)"/>
        </template>
      </van-swipe-cell>
    </div>
    <div class="footer">
      <router-link class="bottom" to="/addaddress">+新建地址</router-link>
    </div>
    <div class="mask" v-show="show">
      <div class="box">
        <div class="title">请确定是否删除地址</div>
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
  name: 'AddressSelect',
  data () {
    return {
      id: '',
      show: false
    }
  },
  mounted () {
    document.body.style.backgroundColor = '#ffffff'
    this.getData()
  },
  methods: {
    async getData () {
      await this.$store.dispatch('getAddressList', localStorage.getItem('openId'))
    },
    del (id) {
      this.id = id + ''
      this.show = true
    },
    async isDel (isSure) {
      if (isSure) {
        try {
          await this.$store.dispatch('delAddress', this.id)
          this.id = ''
          this.getData()
          this.show = false
        } catch (error) {
          alert(error.message)
        }
      } else {
        this.show = false
      }
    }
  },
  computed: {
    ...mapGetters(['addressList'])
  },
  beforeRouteLeave (to, from, next) {
    document.body.style.backgroundColor = '#f4f4f4'
    next()
  }
}
</script>

<style scoped lang="scss">
.addressSelect {
  width: 750px;

  .addressSelect-content {
    width: 100%;
    padding: 0 15px;
    box-sizing: border-box;

    .item {
      width: 100%;
      padding: 22px 0;
      background-color: #fff;
      border-bottom: 1px rgba(0, 0, 0, .1) solid;

      .main {
        display: flex;
        font-size: 12px;
        height: 62px;
        align-items: center;

        .name {
          width: 72px;
          text-align: center;

          .isDefault {
            margin: 12px auto 0;
            line-height: 23px;
            width: 50px;
            border: 1Px solid #b4282d;
            color: #b4282d;
          }

          .hidden {
            opacity: 0;
          }
        }

        .info {
          flex: 1;
          padding: 0 15px;

          p {
            padding: 8px 0;
            width: 100%;
          }
        }

        .changeInfo {
          width: 66px;
          height: 100%;
          background: url('./images/edit.png') no-repeat center;
          background-size: 30px;

          a {
            display: block;
            width: 100%;
            height: 100%;
          }
        }
      }

      .del {
        width: 80px;
        height: 106px;
        font-size: 16px;
        padding: 22px 0;
        top: -22px;
      }
    }
  }

  .footer {
    position: fixed;
    bottom: 0;
    background-color: #fff;
    box-sizing: border-box;
    padding: 22px  56px;
    width: 100%;
    border-top: 1px rgba(0, 0, 0, .1) solid;

    .bottom {
      display: block;
      text-align: center;
      line-height: 52px;
      border: 1Px solid #b4282d;
      font-size: 12px;
      color: #b4282d;
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
