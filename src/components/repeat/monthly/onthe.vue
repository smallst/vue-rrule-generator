<template>
  <div class="monthly-onthe col-sm-9 row  d-flex align-items-sm-center">
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
  </div>
</template>

<script>
import { DAYS } from '@/constants.js'

import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'MonthlyOnThe',
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
    },
    pos: {
      get () {
        const pos = this.options.bysetpos
        if(pos === -1) {
          return 4
        } else {
          return pos -1
        }
      },
      set(val) {
        let pos = val + 1
        if( pos === 5) {
          pos = -1
        }
        this.updateRRule({Pos: pos})
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
  },
  methods: {
    ...mapActions('rruleGenerator', [
      'updateRRule'
    ])
  },
}
</script>
