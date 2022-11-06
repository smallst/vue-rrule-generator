import RRuleGenerator from './components/RRuleGenerator.vue'
import rruleGeneratorModule from './module.js'

const VueRRuleGenerator = {
  install(Vue, options = {}) {
    if(!options.store) console.log('Please provide a store!!')

    Vue.component("vue-rrule-generator", RRuleGenerator)
    options.store.registerModule('rruleGenerator', rruleGeneratorModule)
  }
}

export default VueRRuleGenerator