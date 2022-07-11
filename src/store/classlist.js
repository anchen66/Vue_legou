import Vue from 'vue'
import Vuex from 'vuex'
import { reqClassList, reqClassDetail } from '@/api'

Vue.use(Vuex)

const state = {
  classList: [],
  classDetailList: {}
}
const actions = {
  async getClassList ({ commit }) {
    const result = await reqClassList()
    if (result.status === 200) {
      commit('GETCLASSLIST', result.data.categoryList)
    } else {
      return Promise.reject(new Error('010100101011110110101001001'))
    }
  },
  async getClassDetail ({ commit }, id) {
    const result = await reqClassDetail(id)
    if (result.status === 200) {
      commit('GETCLASSDETAIL', result.data.data.currentOne)
    }
  }
}
const mutations = {
  GETCLASSLIST (state, classList) {
    state.classList = classList
  },
  GETCLASSDETAIL (state, classDetailList) {
    state.classDetailList = classDetailList
  }
}
const getters = {
  classList: state => state.classList,
  classDetailList: state => state.classDetailList
}

export default {
  state,
  actions,
  mutations,
  getters
}
