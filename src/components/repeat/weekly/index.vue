<template>
  <div class="weekly mt-3">
    <form>
      <div class="form-group row d-flex align-items-sm-center mb-3">
        <div class="offset-sm-2">
          <interval unit="Week(s)" />
        </div>
      </div>
      <div class="form-group row d-flex align-items-sm-center">
        <div class="offset-sm-2">
          <on />
        </div>
      </div>

    </form>
  </div>
</template>

<script>
import Interval from '../interval.vue'
import On from './on.vue'

import { mapActions } from 'vuex'
import {RRule} from 'rrule'
export default {
  name: 'WeeklyIndex',
  props: {
  },
  components: {
    Interval, On
  },
  methods: {
    ...mapActions('rruleGenerator', [
      'updateRRule',
      'resetRRule'
    ])
  },
  created() {
    this.updateRRule({Freq: RRule.WEEKLY})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
