<template>
  <div class="yearly-onthe col-sm-9 row d-flex align-items-sm-center">
    <div class="col-sm-1">
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

import { mapActions } from 'vuex'
export default {
  name: 'YearlyOnThe',
  props: {
    state: {
      type: String
    }
  },
  computed: {
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
    },
    bymonth () {
      return this.month + 1
    },
    bysetpos () {
      return this.pos + 1
    }
  },
  data () {
    return {
      month: 0,
      day: 1,
      pos: 0
    }
  },
  methods: {
    ...mapActions('rruleGenerator', [
      'updateRRule'
    ])
  },
  watch: {
    state (val) {
      if(val == 'onthe') {
        this.updateRRule({Month: this.bymonth, WeekDay: this.day, Pos: this.bysetpos})
      }
    },
    month (val) {
      this.updateRRule({Month: val + 1})
    },
    day (val) {
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
    },
    pos (val) {
      let pos = val + 1
      if (pos === 5) {
        pos = -1
      }
      this.updateRRule({Pos: pos})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
