import Vue from 'vue'
import Vuex from 'vuex'
import { reqOrderDetail } from '@/api'

Vue.use(Vuex)

const state = {
  goodsList: [],
  address: {},
  allPrise: ''
}
const actions = {
  async getOrderDetail ({ commit }, params) {
    const result = await reqOrderDetail(params)
    if (result.status === 200) {
      commit('GETORDERDETAIL', result.data)
    } else {
      return Promise.reject(new Error('faile'))
    }
  }
}
const mutations = {
  GETORDERDETAIL (state, data) {
    state.allPrise = data.allPrise
    state.goodsList = data.goodsList
    state.address = data.address
  }
}
const getters = {
  goodsList: state => state.goodsList,
  address: state => state.address,
  allPrise: state => state.allPrise
}

export default {
  state,
  actions,
  mutations,
  getters
}
