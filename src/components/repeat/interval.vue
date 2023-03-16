<template>
  <div class="repeat-interval col-sm-9 row d-flex align-items-sm-center">
    <div class="col-sm-2">
      Every
    </div>
    <div class="col-sm-2">
      <input class="form-control" name="interval" type="number" min="1" v-model="interval" />
    </div>
    <div class="col-sm-2">
      {{ unit }}
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'MonthlyInterval',
  props: {
    unit: {
      type: String
    }
  },
  computed: {
    ...mapGetters('rruleGenerator', [
      'initFromString',
      'options'
    ])
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
    if(this.initFromString) {
      this.interval = this.options.interval
    } else {
      this.updateRRule({Interval: this.interval})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
