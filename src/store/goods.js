import Vue from 'vue'
import Vuex from 'vuex'
import { reqGoodsInfo, reqCollect, reqAddcart } from '@/api'

Vue.use(Vuex)
const state = {
  goodsInfo: {},
  gallery: [],
  attribute: [],
  info: {},
  issue: [],
  productList: []
}
const actions = {
  async getGoodsInfo ({ commit }, params) {
    const result = await reqGoodsInfo(params)
    if (result.status === 200) {
      commit('GETGOODSINFO', result.data)
    } else {
      return Promise.reject(new Error('嗨害嗨,老八正在赶来的路上,请保护好你的电脑'))
    }
  },
  // 加入或取消收藏
  async addCollect ({ commit }, data) {
    const result = await reqCollect(data)
    if (result.status === 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('你网络拉了,不要问我问什么'))
    }
  },
  // 加入购物车
  async addCart ({ commit }, data) {
    const result = await reqAddcart(data)
    if (result.status === 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('你网络拉了,不要问我问什么'))
    }
  }
}
const mutations = {
  GETGOODSINFO (state, goodsInfo) {
    state.goodsInfo = goodsInfo
    state.gallery = goodsInfo.gallery
    state.attribute = goodsInfo.attribute
    state.info = goodsInfo.info
    state.issue = goodsInfo.issue
    state.productList = goodsInfo.productList
  }
}
const getters = {
  goodsInfo: state => state.goodsInfo || {},
  gallery: state => state.gallery || [],
  attribute: state => state.attribute || [],
  info: state => state.info || {},
  issue: state => state.issue || [],
  productList: state => state.productList || []
}

export default {
  state,
  actions,
  mutations,
  getters
}
