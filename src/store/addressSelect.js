import Vue from 'vue'
import Vuex from 'vuex'
import { reqAddressList, reqDelAddress } from '@/api'

Vue.use(Vuex)

const state = {
  addressList: []
}
const actions = {
  async getAddressList ({ commit }, openId) {
    const result = await reqAddressList(openId)
    if (result.status === 200) {
      commit('GETADDRESSLIST', result.data.data)
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  // 删除地址
  async delAddress ({ commit }, id) {
    const result = await reqDelAddress(id)
    console.log(result)
    if (result.status === 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  }
}
const mutations = {
  GETADDRESSLIST (state, addressList) {
    state.addressList = addressList
  }
}
const getters = {
  addressList: state => state.addressList
}

export default {
  state,
  actions,
  mutations,
  getters
}
