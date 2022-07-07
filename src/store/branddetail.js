import Vue from 'vue'
import Vuex from 'vuex'
import { reqBrandDetail } from '@/api'

Vue.use(Vuex)

const state = {
  brandDetailList: {}
}
const actions = {
  async getBrandDetailList ({ commit }, id) {
    const result = await reqBrandDetail(id)
    if (result.status === 200) {
      commit('GETBRANDDETAILLIST', result.data)
    } else {
      return Promise.reject(new Error('啊呀,真不好意思,我把接口吃掉了'))
    }
  }
}
const mutations = {
  GETBRANDDETAILLIST (state, brandDetailList) {
    state.brandDetailList = brandDetailList
  }
}
const getters = {
  brandDetailList: (state) => {
    return state.brandDetailList || {}
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
