import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import categorylist from './categorylist'
import branddetail from './branddetail'
import newgoods from './newgoods'
import goods from './goods'
import topicdetail from './topicdetail'
import subject from './subject'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    categorylist,
    branddetail,
    newgoods,
    goods,
    topicdetail,
    subject
  }
})
