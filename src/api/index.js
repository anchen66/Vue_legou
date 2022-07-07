import requests from './request'
// 首页数据请求
export const reqGetHomeInfo = () => requests({ url: '/index/index', method: 'get' })
// 获取分类列表数据
export const reqCategoryNav = (id) => requests({ url: '/category/categoryNav', method: 'get', params: { id: id } })
// 获取分类详情数据
export const reqCategoryListInfo = (categoryId) => requests({ url: '/goods/goodsList', method: 'get', params: { categoryId } })
// 获取品牌直供商详细数据
export const reqBrandDetail = (id) => requests({ url: '/brand/detailaction', method: 'get', params: { id } })
// 获取新品/推荐商品列表
export const reqNewgoodsList = (params) => requests({ url: '/goods/goodsList', method: 'get', params })
// 获取商品详细信息
export const reqGoodsInfo = (params) => requests({ url: '/goods/detailaction', method: 'get', params })
// 获取专题详情数据
export const reqTopicDetail = (id) => requests({ url: '/topic/detailaction', method: 'get', params: { id } })
// 获取专题列表数据
export const reqTopicList = (page) => requests({ url: '/topic/listaction', method: 'get', params: { page } })
