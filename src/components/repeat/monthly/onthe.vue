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
    bysetpos () {
      return this.pos + 1
    }
  },
  data () {
    return {
      day: 1,
      pos: 0,
      initing: false
    }
  },
  methods: {
    ...mapActions('rruleGenerator', [
      'updateRRule'
    ]),
    init() {
      this.initing = true
      const weekday = this.options.byweekday
      if(Array.isArray(weekday)) {
        switch(weekday.length) {
          case 7: this.day = 7; break;
          case 5: this.day = 8; break;
          case 2: this.day = 9; break;
          case 1: this.day = weekday[0].weekday
        }
      }
      const pos = this.options.bysetpos
      if(pos === -1) {
        this.pos = 4
      } else {
        this.pos = pos -1
      }
      this.$nextTick(() => this.initing = false)
    }
  },
  created () {
    if (this.initFromString) {
      this.init()
    }
  },
  watch: {
    state (val) {
      if(val == 'onthe') {
        if (this.initFromString) {
          this.init()
        } else {
          this.updateRRule({WeekDay: this.day, Pos: this.bysetpos})
        }
      }
    },
    day (val) {
      if(this.initing) return
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
      if(this.initing) return
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
