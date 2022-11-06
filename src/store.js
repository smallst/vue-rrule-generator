import { createStore } from 'vuex'
import rruleGeneratorModule from './module.js'

export default createStore({
  modules: {
    rruleGenerator: rruleGeneratorModule
  }
})