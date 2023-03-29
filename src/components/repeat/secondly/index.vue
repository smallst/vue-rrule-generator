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

export default {
  name: 'SecondlyIndex',
  props: {
  },
  components: {
    Interval
  }
}
</script>

