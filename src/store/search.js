import Vue from 'vue'
import Vuex from 'vuex'
import { reqSearchIndexaction, reqSearchHelper, reqAddHistory, reqClearHistory } from '@/api'

Vue.use(Vuex)

const state = {
  history: [],
  hotKeywordList: [],
  searchGoods: []
}
const actions = {
  // 获取历史搜索或热门搜索
  async getSearchIndexaction ({ commit }, openId) {
    const result = await reqSearchIndexaction(openId)
    if (result.status === 200) {
      commit('GETSEARCHINDEXACTION', result.data)
    }
  },
  // 搜索提示
  async getSearchHelper ({ commit }, params) {
    const result = await reqSearchHelper(params)
    if (result.status === 200) {
      commit('GETSEARCHHELPER', result.data.keywords)
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  // 添加搜索历史
  async AddHistory ({ commit }, data) {
    const result = await reqAddHistory(data)
    console.log(result)
    if (result.status === 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  // 清空搜索历史
  async clearHistory ({ commit }, openId) {
    const result = await reqClearHistory(openId)
    console.log(result)
    if (result.status === 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  }
}
const mutations = {
  GETSEARCHINDEXACTION (state, searchInfo) {
    state.history = searchInfo.historyData
    state.hotKeywordList = searchInfo.hotKeywordList
  },
  GETSEARCHHELPER (state, searchGoods) {
    state.searchGoods = searchGoods
  }
}
const getters = {
  history: state => state.history || [],
  hotKeywordList: state => state.hotKeywordList || [],
  searchGoods: state => state.searchGoods || []
}

export default {
  state,
  actions,
  mutations,
  getters
}
