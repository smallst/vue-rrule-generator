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
      'options'
    ]),
    month: {
      get () {
        if(this.options.bymonth) {
          return this.options.bymonth - 1
        }
        return 0
      },
      set (val) {
        this.updateRRule({Month: val+1})
      }
    },
    day: {
      get () {
        return this.options.bymonthday || 1
      },
      set (val) {
        this.updateRRule({MonthDay: val})
      }
    },
    months () {
      return MONTHS
    },
    bymonth () {
      return this.month + 1
    },
    daysInMonth () {
      const year = this.options.dtstart.getFullYear()
      return new Date(year, (this.month + 1), 0).getDate();
    },
  },
  methods: {
    ...mapActions('rruleGenerator', [
      'updateRRule'
    ])
  }
}
</script>
