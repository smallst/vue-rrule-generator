<template>
  <div class="rrule-generator border rounded">
    <start v-if="options.showStart" :start="start" />
    <hr>
    <repeat />
    <hr>
    <end
      @update-end-state="updateEndState"
      @update-count="updateCount"
      @update-date="updateDate"
    />
    <hr>
    <result :ruleString="rruleString" :ruleText="rruleText" />
  </div>
</template>

<script>
import Start from './start/index.vue'
import Repeat from './repeat/index.vue'
import End from './end/index.vue'
import Result from './result/index.vue'

import { RRule } from 'rrule'

export default {
  name: 'RRuleGenerator',
  props: {
    option: {
      type: Object
    },
    start: {
      type: Date
    },
  },
  components: {
    Start,
    Repeat,
    End,
    Result
  },
  computed: {
    options() {
      const defaultOption = {
        showStart: false,
        showResult: false
      }
      return Object.assign(defaultOption, this.option)
    },
    rruleString () {
      return this.rule.toString()
    },
    rruleText () {
      return this.rule.toText()
    }
  },
  data () {
    return {
      RRule: {
        freq: RRule.DAILY,
        interval: 1,
        dtstart: this.start
      },
      rule: undefined
    }
  },
  methods: {
    updateRule () {
      this.rule = new RRule(this.RRule)
    },
    updateEndState (state) {
      switch(state) {
          case 'Never':
          delete this.RRule.count
          delete this.RRule.until
          break;
      }
      this.updateRule()
    },
    updateCount (count) {
      this.RRule.count = count
      this.updateRule()
    },
    updateDate (date) {
      delete this.RRule.count
      this.RRule.until = date
      this.updateRule()
    }
  },
  created() {
    this.updateRule()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '~bootstrap/dist/css/bootstrap.css';

.rrule-generator {
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
