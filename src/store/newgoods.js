import Vue from 'vue'
import Vuex from 'vuex'
import { reqNewgoodsList } from '@/api'

Vue.use(Vuex)

const state = {
  newGoodsList: []
}
const actions = {
  async getNewgoodsList ({ commit }, params) {
    const result = await reqNewgoodsList(params)
    if (result.status === 200) {
      commit('GETNEWGOODSLIST', result.data.data)
    } else {
      return Promise.reject(new Error('轰,恭喜你,你的电脑炸掉了'))
    }
  }
}
const mutations = {
  GETNEWGOODSLIST (state, newGoodsList) {
    state.newGoodsList = newGoodsList
  }
}
const getters = {
  newGoodsList: (state) => state.newGoodsList
}

export default {
  state,
  actions,
  mutations,
  getters
}
