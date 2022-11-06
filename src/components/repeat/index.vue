<template>
  <div class="repeat">
    <div class="row">
      <label for="repeat" class="col-sm-2 col-form-label">Repeat</label>
      <div class="col-sm-4">
        <select class="form-select" name="repeat" v-model="repeatState">
          <option v-for="op in repeatOptions" :value="op" :key="op">{{op}}</option>
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

import { mapActions } from 'vuex'
export default {
  name: 'RepeatIndex',
  props: {
  },
  components: {
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
  },
  methods: {
    ...mapActions('rruleGenerator', [
      'resetRRule'
    ])
  },
  watch: {
    repeatState (val, ov) {
      switch(ov) {
        case 'Yearly':
          this.resetRRule(['Month', 'MonthDay', 'WeekDay', 'Pos'])
          break
        case 'Monthly':
          this.resetRRule(['MonthDay', 'WeekDay', 'Pos'])
          break
        case 'Weekly':
          this.resetRRule(['WeekDay'])
          break
        case 'Daily':
          break
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
