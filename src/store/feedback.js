import Vue from 'vue'
import Vuex from 'vuex'
import { reqSuggestionFeedback } from '@/api'

Vue.use(Vuex)

const state = {}
const actions = {
  async suggestionFeedback ({ commit }, data) {
    const result = await reqSuggestionFeedback(data)
    console.log(result)
    if (result.status === 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('错误错误,不允许返回意见'))
    }
  }
}
const mutations = {}
const getters = {}

export default {
  state,
  actions,
  mutations,
  getters
}
