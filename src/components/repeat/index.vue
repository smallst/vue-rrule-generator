<template>
  <div class="repeat">
    <div class="row">
      <label for="repeat" class="col-sm-2 col-form-label">Repeat</label>
      <div class="col-sm-4">
        <select class="form-control" name="repeat" v-model="repeatState">
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

import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'RepeatIndex',
  props: {
  },
  components: {
    Yearly, Monthly, Weekly, Daily,
    Hourly, Minutely, Secondly
  },
  computed: {
    ...mapGetters('rruleGenerator', [
      'options'
    ]),
    repeatState: {
      get () {
        return this.repeatOptions[this.options.freq]
      },
      set (val) {
        this.resetRRule(['Month', 'MonthDay', 'WeekDay', 'Pos'])
        console.log('set repeat sate', val)
        switch(val) {
          case 'Yearly':
            this.updateRRule({ Freq: RRule.YEARLY, Month: 0, MonthDay: 1 })
            break
          case 'Monthly':
            this.updateRRule({ Freq: RRule.MONTHLY, MonthDay: 1 })
            break
          case 'Weekly':
            this.updateRRule({ Freq: RRule.WEEKLY, WeekDay: [] })
            break
          case 'Daily':
            this.updateRRule({ Freq: RRule.DAILY })
            break
          case 'Hourly':
            this.updateRRule({ Freq: RRule.HOURLY })
            break
          case 'Minutely':
            this.updateRRule({ Freq: RRule.MINUTELY })
            break
          case 'Secondly':
            this.updateRRule({ Freq: RRule.SECONDLY })
            break
        }
      }
    },
    repeatOptions () {
      return ['Yearly', 'Monthly', 'Weekly', 'Daily', 'Hourly', 'Minutely', 'Secondly']
    }
  },
  methods: {
    ...mapActions('rruleGenerator', [
      'resetRRule',
      'updateRRule'
    ])
  },
}
</script>
