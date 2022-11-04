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
export default {
  name: 'ResultIndex',
  props: {
    ruleString: {
      type: String
    },
    ruleText: {
      type: String
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
