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
import {mapActions} from 'vuex'
export default {
  name: 'EndAfter',
  data () {
    return {
      count: 1,
    }
  },
  methods: {
    ...mapActions('rruleGenerator', [
      'updateRRule'
    ])
  },
  watch: {
    count (val) {
      this.updateRRule({Count: val})
    }
  },
  created () {
    this.updateRRule({Count: this.count})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
