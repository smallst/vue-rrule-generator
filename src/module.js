import { RRule } from 'rrule'

export default {
  namespaced: true,
  state () {
    return {
      RRule: {
        freq: RRule.WEEKLY,
        dtstart: new Date(),
        // interval: 1,
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
      }
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
    unsetFreq (state) {
      state.RRule = { ...state.RRule, freq: undefined}
    },
    setInterval (state, interval) {
      state.RRule = { ...state.RRule, interval: interval}
    },
    unsetInterval (state) {
      state.RRule = { ...state.RRule, interval: undefined}
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
  },
  getters: {
    rule (state) {
      return new RRule(state.RRule)
    },
    ruleString (state, getters) {
      return getters.rule.toString()
    },
    ruleText (state, getters) {
      return getters.rule.toText()
    }
  },
  actions: {
    updateRRule ({ commit }, update) {
      for(const [key, value] of Object.entries(update)) {
        commit('set' + key, value)
      }
    },
    resetRRule ({ commit }, updates) {
      updates.forEach(key => commit('unset' + key))
    }
  }
}