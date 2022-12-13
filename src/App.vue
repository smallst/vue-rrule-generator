<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <rrule-generator class="generator" :start="new Date()" :option="options" />
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
