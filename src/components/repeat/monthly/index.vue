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

import { mapActions } from 'vuex'
import {RRule} from 'rrule'
export default {
  name: 'MonthlyIndex',
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
      monthlyState: 'on'
    }
  },
  watch: {
    monthlyState (val, ov) {
      switch(ov) {
        case 'on':
          this.resetRRule(['MonthDay'])
          break;
        case 'onthe':
          this.resetRRule(['WeekDay', 'Pos'])
          break
      }
    }
  },
  created() {
    this.updateRRule({Freq: RRule.MONTHLY})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
