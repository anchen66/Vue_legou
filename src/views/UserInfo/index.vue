<template>
  <div class="userInfo">
    <div class="top">
      <div class="user-photo">
        <img src="./images/header.jpg">
      </div>
      <div class="user-name">王二狗子</div>
    </div>
    <div class="content">
      <li><router-link :to="{path:'/collectlist'}">我的收藏</router-link></li>
      <li><router-link :to="{path:'/addressSelect'}">地址管理</router-link></li>
      <li><router-link :to="{path:'/feedback'}">意见反馈</router-link></li>
      <li><a ref="javaScript:;">我的订单</a></li>
      <li><a ref="javaScript:;">我的足迹</a></li>
      <li><a ref="javaScript:;">优惠券</a></li>
      <li><a ref="javaScript:;">联系客服</a></li>
      <li><a ref="javaScript:;">帮助中心</a></li>
      <li><a ref="javaScript:;"></a></li>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserInfo'
}
</script>

<style lang='scss' scoped>
.userInfo {
  width: 750px;

  .top {
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    background-color: #333;

    .user-photo {
      width: 105px;
      height: 105px;
      border-radius: 50%;
      padding-left: 22px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;

      }
    }

    .user-name {
      color: #fff;
      margin-left: 20px;
      font-size: 20px;
    }
  }

  .content {
    display: flex;
    background-color: #fff;
    flex-wrap: wrap;

    li {
      flex: 0 33.3%;
      box-sizing: border-box;
      height: 96px;
      border: .5px solid rgba(0, 0, 0, .1);
      line-height: 96px;
      text-align: center;
      font-size: 12px;

      a {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
