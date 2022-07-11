import Vue from 'vue'
import Vuex from 'vuex'
import { reqCartList, reqMinusCart, reqSubmitOrder } from '@/api'

Vue.use(Vuex)

const state = {
  cartList: []
}
const actions = {
  async getCartList ({ commit }, openId) {
    const result = await reqCartList(openId)
    if (result.status === 200) {
      commit('GETCARTLIST', result.data.data)
    } else {
      return Promise.reject(new Error('哦吼,贺喜贺喜,快拔网线'))
    }
  },
  // 删除商品
  async minusCart ({ commit }, id) {
    const result = await reqMinusCart(id)
    if (result.status === 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('快,快拔电源,不然你的小电影要泄露了'))
    }
  },
  // 下单购买
  async submitOrder ({ commit }, data) {
    const result = await reqSubmitOrder(data)
    console.log(result)
    if (result.status === 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('快,快拔电源,不然你的小电影要泄露了'))
    }
  }
}
const mutations = {
  GETCARTLIST (state, cartList) {
    state.cartList = cartList
  }
}
const getters = {
  cartList: state => state.cartList || []
}

export default {
  state,
  actions,
  mutations,
  getters
}
