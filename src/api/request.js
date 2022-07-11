import axios from 'axios'

const requests = axios.create({
  baseURL: '/bufan',
  timeout: 5000
})

const userInfo = {
  openId: '18351617983',
  nickName: '王二狗子',
  avatarUrl: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIbWFEIJj8IpGeHM7dGic1aTFZALjWcMm9ltWfFiaQfVRYticWBfgGfzXWMt2EkJWiaicPtftHAlWxUibxQ/132'
}
const openId = userInfo.openId
localStorage.setItem('userInfo', JSON.stringify(userInfo))
localStorage.setItem('openId', openId)

requests.interceptors.request.use((config) => {
  if (localStorage.userInfo && localStorage.openId) {
    config.headers.userTempId = localStorage.openIdss
  }
  return config
})

export default requests
