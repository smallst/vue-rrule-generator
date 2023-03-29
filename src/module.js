import { RRule } from 'rrule'

export default {
  namespaced: true,
  state () {
    return {
      RRule: {
        freq: RRule.WEEKLY,
        dtstart: new Date(),
        interval: 1,
        // wkst: undefined,
        count: 1,
        // until: undefined,
        // bysetpos: undefined,
        // bymonth: undefined,
        // bymonthday: undefined,
        // byyearday: undefined,
        // byweekkno: undefined,
        // byweekday: undefined,
        // byhour: undefined,
        // byminute: undefined,
        // bysecond: undefined
      },
      selectDays: [],
      initFromString: false
    }
  },
  mutations: {
    setStart (state, start) {
      state.RRule = { ...state.RRule, dtstart: start}
    },
    setCount (state, count) {
      state.RRule = { ...state.RRule, count: count}
    },
    unsetCount (state) {
      state.RRule = { ...state.RRule, count: undefined}
    },
    setUntil (state, until) {
      state.RRule = { ...state.RRule, until: until}
    },
    unsetUntil (state) {
      state.RRule = { ...state.RRule, until: undefined}
    },
    setMonth (state, month) {
      state.RRule = { ...state.RRule, bymonth: month}
    },
    unsetMonth (state) {
      state.RRule = { ...state.RRule, bymonth: undefined}
    },
    setMonthDay (state, day) {
      state.RRule = { ...state.RRule, bymonthday: day}
    },
    unsetMonthDay (state) {
      state.RRule = { ...state.RRule, bymonthday: undefined}
    },
    setFreq (state,  freq) {
      state.RRule = { ...state.RRule, freq: freq}
    },
    setInterval (state, interval) {
      state.RRule = { ...state.RRule, interval: interval}
    },
    unsetInterval (state) {
      state.RRule = { ...state.RRule, interval: 1}
    },
    setPos (state, pos) {
      state.RRule = { ...state.RRule, bysetpos: pos }
    },
    unsetPos (state) {
      state.RRule = { ...state.RRule, bysetpos: undefined}
    },
    setWeekDay (state, day) {
      state.RRule = { ...state.RRule, byweekday: day}
    },
    unsetWeekDay (state) {
      state.RRule = { ...state.RRule, byweekday: undefined}
    },
    toggleSelectDays (state, d) {
      const index = state.selectDays.indexOf(d)
      if(index !== -1) {
        state.selectDays.splice(index, 1)
      } else {
        state.selectDays.push(d)
      }
    },
    unsetSelectDays (state) {
      state.selectDays = []
    },
    parseString (state, str) {
      state.initFromString = true
      state.RRule = RRule.parseString(str)
    },
    resetInit (state) {
      state.initFromString = false
    },
    resetRRule (state) {
     state.RRule = {
        freq: RRule.WEEKLY,
        dtstart: new Date(),
        count: 1,
      }
    }
  },
  getters: {
    selectDays (state) {
      return state.selectDays
    },
    rule (state) {
      return new RRule(state.RRule)
    },
    options (state) {
      return state.RRule
    },
    initFromString (state) {
      return state.initFromString
    },
    ruleString (state, getters) {
      return getters.rule.toString()
    },
    ruleText (state, getters) {
      return getters.rule.toText()
    },
    query: (state, getters) => (key) => {
      switch(key) {
      case 'Start': return getters.options.dtstart
      case 'Count': return getters.options.count
      case 'Until': return getters.options.until
      case 'Month': return getters.options.bymonth
      case 'MonthDay': return getters.options.bymonthday
      case 'Freq': return getters.options.freq
      case 'Interval': return getters.options.interval
      case 'Pos': return getters.options.bysetpos
      case 'WeekDay': return getters.options.byweekday
      default: return undefined
      }
    },
  },
  actions: {
   updateRRule ({ commit, getters}, update) {
     let change = false
      for(const [key, value] of Object.entries(update)) {
        if(getters.query(key) !== value) {
          change = true
          commit('set' + key, value)
        }
      }
     if(change) {
       commit('resetInit')
     }
    },
    resetRRule ({ commit }, updates) {
      updates.forEach(key => commit('unset' + key))
    },
    resetRRuleAll ({ commit }) {
      ['Until', 'Month', 'MonthDay', 'Pos', 'WeekDay', 'SelectDays'].forEach(key => commit('unset' + key))
      commit('setCount', 1)
    },
    importRRule ({ commit, getters }, rruleString) {
      commit('unsetSelectDays')
      commit('parseString', rruleString)
      getters.options.byweekday?.forEach(d => commit('toggleSelectDays', d.weekday))
    }
  }
}