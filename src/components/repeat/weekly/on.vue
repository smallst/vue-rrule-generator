<template>
  <div class="weekly-on col-sm-9 row">
    <div class="btn-group" role="group">
      <template
        v-for="(d, index) in weekDays"
        :key="d"
      >
        <input
          type="checkbox"
          class="btn-check"
          :id="d"
          autocomplete="off"
          :checked="selectDays.includes(index)"
          @click="toggle(index)"
        />
        <label
          class="btn btn-outline-primary my-label"
          :for="d"
        >
          {{d}}
        </label>
      </template>
    </div>
  </div>
</template>

<script>
import { WEEKDAYS } from '@/constants.js'

import { mapActions } from 'vuex'
export default {
  name: 'WeeklyOn',
  props: {
  },
  computed: {
    weekDays () {
      return WEEKDAYS
    }
  },
  data () {
    return {
      selectDays: [0]
    }
  },
  methods: {
    ...mapActions('rruleGenerator', [
      'updateRRule'
    ]),
    toggle (d) {
      const index = this.selectDays.indexOf(d)
      if(index !== -1) {
        this.selectDays.splice(index, 1)
      } else {
        this.selectDays.push(d)
      }
      this.updateRRule({'WeekDay': this.selectDays})
    }
  },
  created() {
    this.updateRRule({'WeekDay': this.selectDays})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my-label {
  flex-grow: 0 !important;
  flex-basis: 4em !important;
}
</style>
