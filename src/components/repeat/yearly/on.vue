<template>
  <div class="yearly-on col-sm-9 row d-flex align-items-sm-center">
    <div class="col-sm-2">
      on
    </div>
    <div class="col-sm-2">
      <select class="form-control" name="month" v-model="month" :disabled="state !== 'on'">
        <option v-for="(m, index) in months" :value="index" :key="m">{{m}}</option>
      </select>
    </div>
    <div class="col-sm-3">
      <select class="form-control" name="day" v-model="day" :disabled="state !== 'on'">
        <option v-for="d in daysInMonth" :value="d" :key="`day-${d}`">{{d}}</option>
      </select>
    </div>
  </div>
</template>

<script>
import { MONTHS } from '@/constants.js'

import moment from 'moment'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'YearlyOn',
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
      initing: false,
      month: 0,
      day: 1
    }
  },
  methods: {
    ...mapActions('rruleGenerator', [
      'updateRRule'
    ]),
    init () {
      this.initing = true
      this.day = this.options.bymonthday
      this.month = this.options.bymonth - 1
      this.$nextTick(() => this.initing = false)
    }
  },
  watch: {
    state (val) {
      if(val == 'on') {
        if (this.initFromString) {
          this.init()
        } else {
          this.updateRRule({Month: this.bymonth, MonthDay: this.day})
        }
      }
    },
    month (val) {
      if(!this.initing){
        this.updateRRule({Month: val+1})
      }
    },
    day (val) {
      if(!this.initing){
        this.updateRRule({MonthDay: val})
      }
    }
  },
  created() {
    if(this.state === 'on') {
      if(this.initFromString) {
        this.init()
      } else {
        this.updateRRule({Month: this.bymonth, MonthDay: this.day})
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
