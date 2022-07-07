import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const originPush = VueRouter.prototype.push
const originRepalce = VueRouter.prototype.replace
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(this, location, () => {}, () => {})
  }
}
VueRouter.prototype.repalce = function (location, resolve, reject) {
  if (resolve && reject) {
    originRepalce.call(this, location, resolve, reject)
  } else {
    originRepalce.call(this, location, () => {}, () => {})
  }
}

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { y: 0 }
  }
})

export default router
