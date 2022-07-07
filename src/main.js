import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import Vant from 'vant'
import 'vant/lib/index.css'
import '@/style/index.scss'
// 引入轮播图全局组件
import Carousel from '@/components/Carousel'
import VantBar from '@/components/VantBar'

Vue.use(Vant)
Vue.component(Carousel.name, Carousel)
Vue.component(VantBar.name, VantBar)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
