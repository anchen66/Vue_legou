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
// 获取分类页列表数据2
export const reqClassList = () => requests({ url: '/category/indexaction', method: 'get' })
// 获取分类页的列表详情数据
export const reqClassDetail = (id) => requests({ url: '/category/currentaction', method: 'get', params: { id } })
// 获取购物车数据
export const reqCartList = (openId) => requests({ url: '/cart/cartList', method: 'get', params: { openId } })
// 加入或取消收藏
export const reqCollect = (data) => requests({ url: '/collect/addcollect', method: 'post', data })
// 加入购物车
export const reqAddcart = (data) => requests({ url: '/cart/addCart', method: 'post', data })
// 删除商品
export const reqMinusCart = (id) => requests({ url: '/cart/deleteAction', method: 'get', params: { id } })
// 提交订单
export const reqSubmitOrder = (data) => requests({ url: '/order/submitAction', method: 'post', data })
// 获取收藏列表
export const reqCollectList = (openId) => requests({ url: 'collect/listAction', method: 'get', params: { openId } })
// 意见反馈
export const reqSuggestionFeedback = (data) => requests({ url: '/feedback/submitAction', method: 'post', data })
// 获取收货地址列表
export const reqAddressList = (openId) => requests({ url: '/address/getListAction', method: 'get', params: { openId } })
// 获取收货地址详情
export const reqAddaddressDetail = (id) => requests({ url: '/address/detailAction', method: 'get', params: { id } })
// 保存和添加收货地址
export const reqSaveAddress = (data) => requests({ url: '/address/saveAction', method: 'post', data })
// 删除地址
export const reqDelAddress = (id) => requests({ url: '/address/deleteAction', method: 'get', params: { id } })
// 订单确认界面数据获取
export const reqOrderDetail = (params) => requests({ url: '/order/detailAction', method: 'get', params })
// 获取热门搜索和历史记录
export const reqSearchIndexaction = (openId) => requests({ url: '/search/indexaction', method: 'get', params: { openId } })
// 搜索提示
export const reqSearchHelper = (params) => requests({ url: '/search/helperaction', method: 'get', params })
// 将搜索的关键字添加到数据库
export const reqAddHistory = (data) => requests({ url: '/search/addhistoryaction', method: 'post', data })
// 清空历史记录
export const reqClearHistory = (openId) => requests({ url: '/search/clearhistoryAction', method: 'post', data: { openId } })
