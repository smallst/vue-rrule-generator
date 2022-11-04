<template>
  <div class="repeat">
    <div class="row">
      <label for="repeat" class="col-sm-2 col-form-label">Repeat</label>
      <div class="col-sm-4">
        <select class="form-select" name="repeat">
          <option v-for="op in repeatOptions" :value="op" :selected="op === repeatState" :key="op">{{op}}</option>
        </select>
      </div>
    </div>
    <div class="row">
      <yearly   v-if="repeatState === 'Yearly'"   />
      <monthly  v-if="repeatState === 'Monthly'"  />
      <weekly   v-if="repeatState === 'Weekly'"   />
      <daily    v-if="repeatState === 'Daily'"    />
      <hourly   v-if="repeatState === 'Hourly'"   />
      <minutely v-if="repeatState === 'Minutely'" />
      <secondly v-if="repeatState === 'Secondly'" />
    </div>
  </div>
</template>

<script>
import Yearly from './yearly/index.vue'
import Monthly from './monthly/index.vue'
import Weekly from './weekly/index.vue'
import Daily from './daily/index.vue'
import Hourly from './hourly/index.vue'
import Minutely from './minutely/index.vue'
import Secondly from './secondly/index.vue'

export default {
  name: 'HelloWorld',
  props: {
  },
  componets: {
    Yearly, Monthly, Weekly, Daily,
    Hourly, Minutely, Secondly
  },
  data () {
    return {
      repeatState: 'Weekly'
    }
  },
  computed: {
    repeatOptions () {
      return ['Yearly', 'Monthly', 'Weekly', 'Daily', 'Hourly', 'Minutely', 'Secondly']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
