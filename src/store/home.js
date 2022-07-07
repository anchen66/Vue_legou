import Vue from 'vue'
import Vuex from 'vuex'
import { reqGetHomeInfo } from '@/api'

Vue.use(Vuex)

const state = {
  homeInfo: {},
  listInfo: {}
}
const actions = {
  async getHomeInfo ({ commit }) {
    const result = await reqGetHomeInfo()
    if (result.status === 200) {
      commit('GETHOMEINFO', result.data)
    } else {
      return Promise.reject(new Error('好棒棒哦,服务器炸了'))
    }
  }
}
const mutations = {
  GETHOMEINFO (state, homeInfo) {
    state.homeInfo = homeInfo
  }
}
const getters = {
  banner: (state) => state.homeInfo.banner || [],
  brandList: (state) => state.homeInfo.brandList || [],
  channel: (state) => state.homeInfo.channel || [],
  hotGoods: (state) => state.homeInfo.hotGoods || [],
  newCategoryList: (state) => state.homeInfo.newCategoryList || [],
  newGoods: (state) => state.homeInfo.newGoods || [],
  topicList: (state) => state.homeInfo.topicList || []
}

export default {
  state,
  actions,
  mutations,
  getters
}
