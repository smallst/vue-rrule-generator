<template>
  <div class="minutely mt-3">
    <form>
      <div class="form-group row d-flex align-items-sm-center mb-3">
        <div class="offset-sm-2">
          <interval unit="Minute(s)" />
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
  name: 'MinutelyIndex',
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
    this.updateRRule({Freq: RRule.MINUTELY})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
