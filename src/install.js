import RRuleGenerator from './components/RRuleGenerator.vue'

const VueRRuleGenerator = {
  install(Vue) {
    Vue.component("vue-rrule-generator", RRuleGenerator)
  }
}

if(typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueRRuleGenerator)
}

export default VueRRuleGenerator