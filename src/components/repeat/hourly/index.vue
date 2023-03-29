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

export default {
  name: 'HourlyIndex',
  props: {
  },
  components: {
    Interval
  }
}
</script>

