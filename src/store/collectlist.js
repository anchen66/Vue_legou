import Vue from 'vue'
import Vuex from 'vuex'
import { reqCollectList } from '@/api'

Vue.use(Vuex)

const state = {
  collectList: []
}
const actions = {
  // 获取收藏列表数据
  async getCollectList ({ commit }, openId) {
    const result = await reqCollectList(openId)
    console.log(result)
    if (result.status === 200) {
      commit('GETCOLLECTLIST', result.data.collectGoodsList)
    } else {
      return Promise.reject(new Error('警告,警告,电脑将在十秒内爆照'))
    }
  }
}
const mutations = {
  GETCOLLECTLIST (state, collectList) {
    state.collectList = collectList
  }
}
const getters = {
  collectList: state => state.collectList || []
}

export default {
  state,
  actions,
  mutations,
  getters
}
