<template>
  <div class="yearly mt-3">
    <form>
      <div class="form-group row d-flex align-items-sm-center mb-3">
        <div class="offset-sm-2">
          <interval unit="Year(s)" />
        </div>
      </div>
    <div class="form-group row d-flex align-items-sm-center mb-3">
      <div class="col-sm-1 offset-sm-2">
        <input class="form-check-input" type="radio" v-model="yearlyState" value="on"/>
      </div>
      <on :class="{'opacity-50': yearlyState === 'onthe'}" :state="yearlyState" />
    </div>
    <div class="form-group row d-flex align-items-sm-center">
      <div class="col-sm-1 offset-sm-2">
        <input class="form-check-input" type="radio" v-model="yearlyState" value="onthe"/>
      </div>
      <on-the :class="{'opacity-50': yearlyState === 'on'}" :state="yearlyState" />
    </div>

    </form>
  </div>
</template>

<script>
import Interval from '../interval.vue'
import On from './on.vue'
import OnThe from './onthe.vue'

import { mapActions } from 'vuex'
import {RRule} from 'rrule'
export default {
  name: 'YearlyIndex',
  props: {
  },
  components: {
    On, OnThe, Interval
  },
  methods: {
    ...mapActions('rruleGenerator', [
      'updateRRule',
      'resetRRule'
    ])
  },
  data () {
    return {
      yearlyState: 'on'
    }
  },
  watch: {
    yearlyState (val, ov) {
      switch(ov) {
          case 'on':
          this.resetRRule(['Month', 'MonthDay'])
          break;
          case 'onthe':
          this.resetRRule(['Month', 'WeekDay', 'Pos'])
          break
      }
    }
  },
  created() {
    this.updateRRule({Freq: RRule.YEARLY})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
