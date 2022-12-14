<template>
  <div class="daily mt-3">
    <form>
      <div class="form-group row mb-3">
        <interval class="col-sm-offset-2" unit="Day(s)" />
      </div>
    </form>
  </div>
</template>

<script>
import Interval from '../interval.vue'

import { mapActions } from 'vuex'
import {RRule} from 'rrule'
export default {
  name: 'DailyIndex',
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
    this.updateRRule({Freq: RRule.DAILY})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
