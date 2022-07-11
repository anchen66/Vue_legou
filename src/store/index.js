import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import categorylist from './categorylist'
import branddetail from './branddetail'
import newgoods from './newgoods'
import goods from './goods'
import topicdetail from './topicdetail'
import subject from './subject'
import classlist from './classlist'
import cart from './cart'
import collectlist from './collectlist'
import feedback from './feedback'
import addressSelect from './addressSelect'
import addAdress from './addAdress'
import order from './order'
import search from './search'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    categorylist,
    branddetail,
    newgoods,
    goods,
    topicdetail,
    subject,
    classlist,
    cart,
    collectlist,
    feedback,
    addressSelect,
    addAdress,
    order,
    search
  }
})
