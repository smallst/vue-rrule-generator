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
      state.RRule.dtstart = start
    },
    setCount (state, count) {
      state.RRule.count = count
    },
    unsetCount (state) {
      delete state.RRule.count
    },
    setUntil (state, until) {
      state.RRule.until = until
    },
    unsetUntil (state) {
      delete state.RRule.until
    },
    setMonth (state, month) {
      state.RRule.bymonth = month
    },
    unsetMonth (state) {
      delete state.RRule.bymonth
    },
    setMonthDay (state, day) {
      state.RRule.bymonthday = day
    },
    unsetMonthDay (state) {
      delete state.RRule.bymonthday
    },
    setFreq (state,  freq) {
      state.RRule.freq = freq
    },
    unsetFreq (state) {
      delete state.RRule.freq
    },
    setInterval (state, interval) {
      state.RRule.interval = interval
    },
    unsetInterval (state) {
      delete state.RRule.interval
    },
    setPos (state, pos) {
      state.RRule.bysetpos = pos
    },
    unsetPos (state) {
      delete state.RRule.bysetpos
    },
    setWeekDay (state, day) {
      state.RRule.byweekday = day
    },
    unsetWeekDay (state) {
      delete state.RRule.byweekday
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