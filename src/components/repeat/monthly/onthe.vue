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
      console.log("??? pos", pos)
      this.updateRRule({Pos: pos})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
