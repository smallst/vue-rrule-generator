<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <input type="button" @click="random"/>
    <rrule-generator class="generator" :start="new Date()" :option="options"
                     :rrule="rule"
    />
  </div>
</template>

<script>
import RRuleGenerator from './components/RRuleGenerator.vue'

export default {
  name: 'App',
  components: {
    'rrule-generator': RRuleGenerator
  },
  computed: {
    options() {
      return {
        showStart: true,
        showResult: true
      }
    }
  },
  data () {
    return {
      rule: 'DTSTART:20230314T080000Z\nRRULE:FREQ=WEEKLY;COUNT=3;INTERVAL=1'
}
},
methods: {
  random() {
    const index = Math.random() * 4 | 0
    this.rule = [
     'DTSTART:20230316T013915Z\nRRULE:FREQ=MONTHLY;INTERVAL=2;UNTIL=20230316T031907Z;BYDAY=WE;BYSETPOS=3',
      'DTSTART:20230316T013915Z\nRRULE:FREQ=YEARLY;INTERVAL=3;BYMONTH=5;BYMONTHDAY=10;COUNT=3',
'DTSTART:20230316T013915Z\nRRULE:FREQ=MINUTELY;INTERVAL=3;UNTIL=20230316T031907Z',
'DTSTART:20230316T013915Z\nRRULE:FREQ=SECONDLY;INTERVAL=3'      ,
      'DTSTART:20230316T013915Z\nRRULE:FREQ=MONTHLY;INTERVAL=1;UNTIL=20230316T031907Z;BYMONTHDAY=5'
    ][index]
  }
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.generator {
  margin-left: 20%;
  margin-right: 20%;
}
</style>
<style src="./assets/bootstrap-scope.css" />
