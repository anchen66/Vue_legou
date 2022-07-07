import Vue from 'vue'
import Vuex from 'vuex'
import { reqGoodsInfo } from '@/api'

Vue.use(Vuex)
const state = {
  goodsInfo: {}
}
const actions = {
  async getGoodsInfo ({ commit }, params) {
    const result = await reqGoodsInfo(params)
    if (result.status === 200) {
      commit('GETGOODSINFO', result.data)
    } else {
      return Promise.reject(new Error('嗨害嗨,老八正在赶来的路上,请保护好你的电脑'))
    }
  }
}
const mutations = {
  GETGOODSINFO (state, goodsInfo) {
    state.goodsInfo = goodsInfo
  }
}
const getters = {}

export default {
  state,
  actions,
  mutations,
  getters
}
