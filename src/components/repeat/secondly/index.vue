<template>
  <div class="secondly mt-3">
    <form>
      <div class="form-group rowmb-3">
        <interval class="col-sm-offset-2" unit="Second(s)" />
      </div>
    </form>
  </div>
</template>

<script>
import Interval from '../interval.vue'

import { mapActions } from 'vuex'
import {RRule} from 'rrule'
export default {
  name: 'SecondlyIndex',
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
    this.updateRRule({Freq: RRule.SECONDLY})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
