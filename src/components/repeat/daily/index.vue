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

export default {
  name: 'DailyIndex',
  props: {
  },
  components: {
    Interval
  },
}
</script>
