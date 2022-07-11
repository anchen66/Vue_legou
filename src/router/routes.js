export default [
  {
    path: '*',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home'),
    meta: {
      show: true
    }
  },
  {
    path: '/subject',
    name: 'Subject',
    component: () => import('@/views/Subject'),
    meta: {
      show: true
    }
  },
  {
    path: '/class',
    name: 'Class',
    component: () => import('@/views/Class'),
    meta: {
      show: true
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('@/views/Cart'),
    meta: {
      show: true
    }
  },
  {
    path: '/userinfo',
    name: 'UserInfo',
    component: () => import('@/views/UserInfo'),
    meta: {
      show: true
    }
  },
  {
    path: '/categorylist',
    name: 'CategoryList',
    component: () => import('@/views/CategoryList')
  },
  {
    path: '/branddetail',
    name: 'Branddetail',
    component: () => import('@/views/Branddetail')
  },
  {
    path: '/newgoods',
    name: 'Newgoods',
    component: () => import('@/views/Newgoods')
  },
  {
    path: '/goods',
    name: 'Goods',
    component: () => import('@/views/Goods')
  },
  {
    path: '/topicdetail',
    name: 'Topicdetail',
    component: () => import('@/views/Topicdetail')
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('@/views/Order')
  },
  {
    path: '/collectlist',
    name: 'Collectlist',
    component: () => import('@/views/Collectlist')
  },
  {
    path: '/addressSelect',
    name: 'AddressSelect',
    component: () => import('@/views/AddressSelect')
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: () => import('@/views/Feedback')
  },
  {
    path: '/addaddress',
    name: 'Addaddress',
    component: () => import('@/views/Addaddress')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/views/Search')
  }
]
