<template>
  <div class="footer">
    <li class="footer-item">
      <router-link to="/home">
        <i class="iconfont icon-shouye"></i>
        <span>首页</span>
      </router-link>
    </li>
    <li class="footer-item">
      <router-link to="/subject">
        <i class="iconfont icon-icon"></i>
        <span>专题</span>
      </router-link>
    </li>
    <li class="footer-item">
      <router-link to="/class">
        <i class="iconfont icon-fenlei"></i>
        <span>分类</span>
      </router-link>
    </li>
    <li class="footer-item">
      <router-link to="/cart">
        <i class="iconfont icon-gouwuche"></i>
        <span>购物车</span>
      </router-link>
    </li>
    <li class="footer-item">
      <router-link to="/userinfo">
        <i class="iconfont icon-shouye1"></i>
        <span>我的</span>
      </router-link>
    </li>
  </div>
</template>

<script>
import './iconfont.css'
export default {
  name: 'Footer'
}
</script>

<style lang='scss' scoped>
.footer {
  width: 750px;
  height: 70px;
  position: fixed;
  bottom: 0;
  z-index: 99;
  background-color: #fff;
  display: flex;
  text-align: center;
  box-sizing: border-box;

  .footer-item {
    height: 100%;
    flex: 1;

    a {
      width: 100%;
      height: 100%;
      display: block;
      display: flex;
      flex-direction: column;
      justify-content: center;

      span {
      font-size: 17px;
      }
    }

    .router-link-exact-active {
      color: rgb(195, 85, 89);
    }
  }
}
</style>
