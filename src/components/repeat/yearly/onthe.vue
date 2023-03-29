<template>
  <div class="yearly-onthe col-sm-9 row d-flex align-items-sm-center">
    <div class="col-sm-2">
      on the
    </div>
    <div class="col-sm-2">
      <select class="form-control" name="pos" v-model="pos" :disabled="state !== 'onthe'">
        <option v-for="(o, index) in orders" :value="index" :key="o">{{o}}</option>
      </select>
    </div>
    <div class="col-sm-3">
      <select class="form-control" name="day" v-model="day" :disabled="state !== 'onthe'">
        <option v-for="(d, index) in weekDays" :value="index" :key="d">{{d}}</option>
      </select>
    </div>
    <div class="col-sm-1">
      of
    </div>
    <div class="col-sm-2">
      <select class="form-control" name="month" v-model="month" :disabled="state !== 'onthe'">
        <option v-for="(m, index) in months" :value="index" :key="m">{{m}}</option>
      </select>
    </div>
  </div>
</template>

<script>
import { MONTHS, DAYS } from '@/constants.js'

import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'YearlyOnThe',
  props: {
    state: {
      type: String
    }
  },
  computed: {
    ...mapGetters('rruleGenerator', [
      'initFromString',
      'options'
    ]),
    month: {
      get() {
        return this.options.bymonth - 1 || 0
      },
      set (val) {
        this.updateRRule({Month: val + 1})
      }
    },
    day: {
      get() {
        const weekday = this.options.byweekday
        if(Array.isArray(weekday)) {
          switch(weekday.length) {
            case 7: return 7
            case 5: return 8
            case 2: return 9
            case 1: return weekday[0].weekday
          }
        }
        return weekday
      },
      set(val) {
        let weekday = val;
        switch(val) {
          case 7:
            weekday = [0, 1, 2, 3, 4, 5, 6]
            break
          case 8:
            weekday = [0, 1, 2, 3, 4]
            break
          case 9:
            weekday = [5, 6]
            break
        }
        this.updateRRule({WeekDay: weekday})
      }
    },
    pos: {
      get() {
        const pos = this.options.bysetpos
        if(pos === -1) {
          return 4
        } else {
          return pos - 1
        }
      },
      set (val) {
        let pos = val + 1
        if (pos === 5) {
          pos = -1
        }
        this.updateRRule({Pos: pos})
      }
    },
    months () {
      return MONTHS
    },
    weekDays () {
      return DAYS
    },
    orders () {
      return [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Last'
      ]
    }
  },
  methods: {
    ...mapActions('rruleGenerator', [
      'updateRRule'
    ]),
  }
}
</script>
