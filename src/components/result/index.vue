<template>
  <div class="result row">
    <label for="result" class="col-sm-2 col-form-label">RRule</label>
    <div class="col-sm-8">
      <input class="form-control" name="resultString" type="text" :value="ruleString" disabled />
      <br>
      <input class="form-control" name="resultText" type="text" :value="ruleText" disabled />
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'ResultIndex',
  props: {
  },
  computed: {
    ...mapGetters('rruleGenerator', [
      'ruleString',
      'ruleText',
    ])
  }
}
</script>
