<template>
  <div class="rrule-generator border rounded">
    <start v-if="showStart" :start="start" />
    <hr>
    <repeat />
    <hr>
    <end />
    <hr>
    <result v-if="showResult" />
  </div>
</template>

<script>
import Start from './start/index.vue'
import Repeat from './repeat/index.vue'
import End from './end/index.vue'
import Result from './result/index.vue'

import { RRule } from 'rrule'
import {mapActions} from 'vuex'
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
    showStart () {
      return this.option?.showStart
    },
    showResult () {
      return this.option?.showResult
    },
    storeRule () {
      return this.$store.rruleGenerator.state.RRule
    }
  },
  methods: {
    ...mapActions('rruleGenerator', [
      'updateRRule'
    ]),
  },
  created() {
    window.RRule = RRule
    this.updateRRule({Start: this.start})
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
