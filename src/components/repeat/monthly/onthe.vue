<template>
  <div class="monthly-onthe col-sm-9 row">
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
  </div>
</template>

<script>
import { DAYS } from '@/constants.js'

import { mapActions } from 'vuex'
export default {
  name: 'MonthlyOnThe',
  props: {
    state: {
      type: String
    }
  },
  computed: {
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
    bysetpos () {
      return this.pos + 1
    }
  },
  data () {
    return {
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
        this.updateRRule({WeekDay: this.day, Pos: this.bysetpos})
      }
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
