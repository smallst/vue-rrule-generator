import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
import rruleGeneratorModule from './module.js'

export default new Vuex.Store({
  modules: {
    rruleGenerator: rruleGeneratorModule
  }
})