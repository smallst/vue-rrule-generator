<template>
  <div class="hourly mt-3">
    <form>
      <div class="form-group rowmb-3">
        <interval class="col-sm-offset-2" unit="Hour(s)" />
      </div>
    </form>
  </div>
</template>

<script>
import Interval from '../interval.vue'

import { mapActions, mapGetters } from 'vuex'
import {RRule} from 'rrule'
export default {
  name: 'HourlyIndex',
  props: {
  },
  components: {
    Interval
  },
  computed: {
    ...mapGetters('rruleGenerator', [
      'initFromString',
    ])
  },
  methods: {
    ...mapActions('rruleGenerator', [
      'updateRRule',
      'resetRRule'
    ])
  },
  created() {
    if(!this.initFromString) {
      this.updateRRule({Freq: RRule.HOURLY})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
