<template>
  <div class="yearly-onthe col-sm-9 row">
    <div class="col-sm-1">
      on the
    </div>
    <div class="col-sm-2">
      <select class="form-select" name="pos" v-model="pos" :disabled="state !== 'onthe'">
        <option v-for="(o, index) in orders" :value="index" :key="o">{{o}}</option>
      </select>
    </div>
    <div class="col-sm-3">
      <select class="form-select" name="day" v-model="day" :disabled="state !== 'onthe'">
        <option v-for="(d, index) in weekDays" :value="index" :key="d">{{d}}</option>
      </select>
    </div>
    <div class="col-sm-1">
      of
    </div>
    <div class="col-sm-2">
      <select class="form-select" name="month" v-model="month" :disabled="state !== 'onthe'">
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
      this.updateRRule({WeekDay: val})
    },
    pos (val) {
      this.updateRRule({Pos: val + 1})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
