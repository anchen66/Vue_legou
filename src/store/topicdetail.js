import Vue from 'vue'
import Vuex from 'vuex'
import { reqTopicDetail } from '@/api'

Vue.use(Vuex)

const state = {
  topicDetailList: {}
}
const actions = {
  async getTopicDetailList ({ commit }, id) {
    const result = await reqTopicDetail(id)
    if (result.status === 200) {
      commit('GETTOPICDETAILLIST', result.data)
    } else {
      return Promise.reject(new Error('轰,恭喜你,你的电脑炸掉了'))
    }
  }
}
const mutations = {
  GETTOPICDETAILLIST (state, topicDetailList) {
    state.topicDetailList = topicDetailList
  }
}
const getters = {
  topicDetailList: (state) => state.topicDetailList
}

export default {
  state,
  actions,
  mutations,
  getters
}
