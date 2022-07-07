import Vue from 'vue'
import Vuex from 'vuex'
import { reqTopicList } from '@/api'

Vue.use(Vuex)

const state = {
  total: 0,
  list: []
}
const actions = {
  async getTopicListInfo ({ commit }, page) {
    const result = await reqTopicList(page)
    if (result.status === 200) {
      commit('GETTOPICLISTINFO', result.data)
    }
  }
}
const mutations = {
  GETTOPICLISTINFO (state, data) {
    state.total = data.total
    state.list = state.list.concat(data.data)
  }
}
const getters = {
  total: state => state.total,
  list: state => state.list
}

export default {
  state,
  actions,
  mutations,
  getters
}
