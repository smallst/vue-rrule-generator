<template>
  <div class="minutely mt-3">
    <form>
      <div class="form-group rowmb-3">
        <interval class="col-sm-offset-2" unit="Minute(s)" />
      </div>
    </form>
  </div>
</template>

<script>
import Interval from '../interval.vue'

export default {
  name: 'MinutelyIndex',
  props: {
  },
  components: {
    Interval
  }
}
</script>
