<template>
  <div class="hourly mt-3">
    <form>
      <div class="form-group row d-flex align-items-sm-center mb-3">
        <div class="offset-sm-2">
          <interval unit="Hour(s)" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Interval from '../interval.vue'

import { mapActions } from 'vuex'
import {RRule} from 'rrule'
export default {
  name: 'HourlyIndex',
  props: {
  },
  components: {
    Interval
  },
  methods: {
    ...mapActions('rruleGenerator', [
      'updateRRule',
      'resetRRule'
    ])
  },
  created() {
    this.updateRRule({Freq: RRule.HOURLY})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
