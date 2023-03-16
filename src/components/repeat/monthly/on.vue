<template>
  <div class="monthly-on col-sm-9 row d-flex align-items-sm-center">
    <div class="col-sm-2">
      on day
    </div>
    <div class="col-sm-2">
      <select class="form-control" name="day" v-model="day" :disabled="state !== 'on'">
        <option v-for="d in 31" :value="d" :key="`day-${d}`">{{d}}</option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'MonthlyOn',
  props: {
    state: {
      type: String
    }
  },
  computed: {
    ...mapGetters('rruleGenerator', [
      'initFromString',
      'options'
    ])
  },
  data () {
    return {
      day: 1
    }
  },
  methods: {
    ...mapActions('rruleGenerator', [
      'updateRRule'
    ])
  },
  watch: {
    state (val) {
      if(val == 'on') {
        if(this.initFromString) {
          this.day = this.options.bymonthday
        } else {
          this.updateRRule({MonthDay: this.day})
        }
      }
    },
    day (val) {
      this.updateRRule({MonthDay: val})
    }
  },
  created() {
    if(this.initFromString) {
      this.day = this.options.bymonthday
    } else {
      this.updateRRule({MonthDay: this.day})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
