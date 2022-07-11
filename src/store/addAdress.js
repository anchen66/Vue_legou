import Vue from 'vue'
import Vuex from 'vuex'
import { reqAddaddressDetail, reqSaveAddress } from '@/api'

Vue.use(Vuex)

const state = {
  addressDetail: {}
}
const actions = {
  // 获取地址详细信息
  async getAddressDetail ({ commit }, id) {
    const result = await reqAddaddressDetail(id)
    console.log(result)
    if (result.status === 200) {
      commit('GETADDRESSDETAIL', result.data.data)
    }
  },
  // 保存或修改地址信息
  async saveAddress ({ commit }, data) {
    const result = await reqSaveAddress(data)
    if (result.status === 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  }
}
const mutations = {
  GETADDRESSDETAIL (state, addressDetail) {
    state.addressDetail = addressDetail
  }
}
const getters = {
  addressDetail: state => state.addressDetail
}

export default {
  state,
  actions,
  mutations,
  getters
}
