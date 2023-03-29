<template>
  <div class="monthly mt-3">
    <form>
      <div class="form-group row d-flex align-items-sm-center mb-3">
        <interval class="col-sm-offset-2" unit="Month(s)" />
      </div>
      <div class="form-group row d-flex align-items-sm-center mb-3">
        <div class="col-sm-1 col-sm-offset-2">
          <input class="form-check-input" type="radio" v-model="monthlyState" value="on"/>
        </div>
        <on :class="{'opacity-50': monthlyState === 'onthe'}" :state="monthlyState" />
      </div>
      <div class="form-group row d-flex align-items-sm-center">
        <div class="col-sm-1 col-sm-offset-2">
          <input class="form-check-input" type="radio" v-model="monthlyState" value="onthe"/>
        </div>
        <on-the :class="{'opacity-50': monthlyState === 'on'}" :state="monthlyState" />
      </div>

    </form>
  </div>
</template>

<script>
import Interval from '../interval.vue'
import On from './on.vue'
import OnThe from './onthe.vue'

import { mapActions, mapGetters } from 'vuex'
import {RRule} from 'rrule'
export default {
  name: 'MonthlyIndex',
  props: {
  },
  components: {
    On, OnThe, Interval
  },
  computed: {
    ...mapGetters('rruleGenerator', [
      'options'
    ]),
    monthlyState: {
      get () {
        if(this.options.bymonthday) {
          return 'on'
        } else {
          return 'onthe'
        }
      },
      set (val) {
       this.resetRRule(['MonthDay', 'WeekDay', 'Pos'])
        if(val === 'on') {
          this.updateRRule({MonthDay: 1})
        } else {
          this.updateRRule({WeekDay: 1, Pos: 1})
        }
      }
    },
  },
  methods: {
    ...mapActions('rruleGenerator', [
      'updateRRule',
      'resetRRule'
    ])
  }
}
</script>
