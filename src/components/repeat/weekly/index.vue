<template>
  <div class="weekly mt-3">
    <form>
      <div class="form-group row d-flex align-items-sm-center mb-3">
        <interval unit="Week(s)" class="col-sm-offset-2" />
      </div>
      <div class="form-group row d-flex align-items-sm-center">
        <on class="col-sm-offset-2" />
      </div>

    </form>
  </div>
</template>

<script>
import Interval from '../interval.vue'
import On from './on.vue'

import { mapActions, mapGetters } from 'vuex'
import { RRule } from 'rrule'
export default {
  name: 'WeeklyIndex',
  props: {
  },
  components: {
    Interval, On
  },
  computed: {
    ...mapGetters('rruleGenerator', [
      'initFromString'
    ]),
  },
  methods: {
    ...mapActions('rruleGenerator', [
      'updateRRule',
      'resetRRule'
    ])
  },
  created() {
    if(!this.initFromString) {
      this.updateRRule({Freq: RRule.WEEKLY})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
