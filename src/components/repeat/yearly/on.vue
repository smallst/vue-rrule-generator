<template>
  <div class="yearly-on col-sm-9 row">
    <div class="col-sm-1">
      on
    </div>
    <div class="col-sm-2">
      <select class="form-select" name="month" v-model="month" :disabled="state !== 'on'">
        <option v-for="(m, index) in months" :value="index" :key="m">{{m}}</option>
      </select>
    </div>
    <div class="col-sm-3">
      <select class="form-select" name="day" v-model="day" :disabled="state !== 'on'">
        <option v-for="d in daysInMonth" :value="d" :key="`day-${d}`">{{d}}</option>
      </select>
    </div>
  </div>
</template>

<script>
import { MONTHS } from '@/constants.js'

import moment from 'moment'
import { mapActions } from 'vuex'
export default {
  name: 'YearlyOn',
  props: {
    state: {
      type: String
    }
  },
  computed: {
    months () {
      return MONTHS
    },
    bymonth () {
      return this.month + 1
    },
    daysInMonth () {
      return moment(MONTHS[this.month], 'MMM').daysInMonth()
    },
  },
  data () {
    return {
      month: 0,
      day: 1
    }
  },
  methods: {
    ...mapActions('rruleGenerator', [
      'updateRRule'
    ])
  },
  watch: {
    state (val) {
      if(val == 'on') {
        this.updateRRule({Month: this.bymonth, MonthDay: this.day})
      }
    },
    month (val) {
        this.updateRRule({Month: val+1})
    },
    day (val) {
        this.updateRRule({MonthDay: val})
    }
  },
  created() {
    this.updateRRule({Month: this.bymonth, MonthDay: this.day})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
