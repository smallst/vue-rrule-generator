<template>
  <div class="after form-group m-0 row d-flex align-items-center">
    <div class="col-3 col-sm-6 pl-0">
    <input class="form-control" type="number" min="1" v-model="count"/>
    </div>
    <div class="col-9 col-sm-2">
      executions
    </div>
  </div>
</template>

<script>
export default {
  name: 'EndAfter',
  data () {
    return {
      count: 1,
    }
  },
  watch: {
    count (val) {
      this.$emit('update-count', val)
    }
  },
  created () {
    this.$emit('update-count', this.count)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
