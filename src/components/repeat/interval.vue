<template>
  <div class="repeat-interval col-sm-9 row">
    <div class="col-sm-1">
      Every
    </div>
    <div class="col-sm-2">
      <input class="form-control" name="interval" type="number" min="1" v-model="interval" />
    </div>
    <div class="col-sm-1">
      {{ unit }}
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'MonthlyInterval',
  props: {
    unit: {
      type: String
    }
  },
  methods: {
    ...mapActions('rruleGenerator', [
      'updateRRule',
      'resetRRule'
    ])
  },
  data () {
    return {
      interval: 1
    }
  },
  watch: {
    interval (val) {
      this.updateRRule({Interval: val})
    }
  },
  created() {
    this.updateRRule({Interval: this.interval})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
