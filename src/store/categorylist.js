import Vue from 'vue'
import Vuex from 'vuex'
import { reqCategoryNav, reqCategoryListInfo } from '@/api'

Vue.use(Vuex)

const state = {
  nowCategoryNavId: '',
  allCategoryNav: [],
  currentNav: {},
  categoryList: []
}
const actions = {
  // 分类列表信息
  async getCategoryNavId ({ commit }, id) {
    const result = await reqCategoryNav(id)
    if (result.status === 200) {
      commit('GETCATEGORYNAVID', result.data)
    } else {
      return Promise.reject(new Error('恭喜你哦,你的接口炸掉咯'))
    }
  },
  // 分类详情信息
  async getCategoryList ({ commit }, categoryId) {
    const result = await reqCategoryListInfo(categoryId)
    if (result.status === 200) {
      commit('GETCATEGORYLIST', result.data)
    } else {
      return Promise.reject(new Error('恭喜你哦,你的接口炸掉咯'))
    }
  }
}
const mutations = {
  GETCATEGORYNAVID (state, data) {
    state.nowCategoryNavId = data.currentNav.id
    state.allCategoryNav = data.navData
  },
  GETCATEGORYLIST (state, data) {
    state.currentNav = data.currentNav
    state.categoryList = data.data
  }
}
const getters = {
  nowCategoryNavId: (state) => state.nowCategoryNavId,
  allCategoryNav: (state) => state.allCategoryNav,
  currentNav: (state) => state.currentNav,
  categoryList: (state) => state.categoryList
}

export default {
  state,
  actions,
  mutations,
  getters
}
