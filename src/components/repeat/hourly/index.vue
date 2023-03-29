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
  }
}
</script>

