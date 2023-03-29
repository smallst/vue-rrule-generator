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
      'options'
    ]),
    day: {
      get () {
        return this.options.bymonthday
      },
      set (val) {
        this.updateRRule({MonthDay: val})
      }
    }
  },
  methods: {
    ...mapActions('rruleGenerator', [
      'updateRRule'
    ])
  }
}
</script>
