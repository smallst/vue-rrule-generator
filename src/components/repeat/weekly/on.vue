<template>
  <div class="weekly-on col-sm-9 row">
    <div class="btn-group d-flex" role="group">
      <template
        v-for="(d, index) in weekDays"
      >
        <input
          type="checkbox"
          class="btn-check"
          :id="d"
          :key="`input-${d}`"
          autocomplete="off"
          :checked="selectDays.includes(index)"
          @click="toggle(index)"
        />
        <label
          class="btn my-label"
          :class="selectDays.includes(index) ? 'btn-primary': 'btn-default'"
          :for="d"
          :key="`label-${d}`"
        >
          {{d}}
        </label>
      </template>
    </div>
  </div>
</template>

<script>
import { WEEKDAYS } from '@/constants.js'

import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  name: 'WeeklyOn',
  props: {
  },
  computed: {
    ...mapGetters('rruleGenerator', [
      'selectDays'
    ]),
    weekDays () {
      return WEEKDAYS
    }
  },
  methods: {
    ...mapActions('rruleGenerator', [
      'updateRRule'
    ]),
    ...mapMutations('rruleGenerator', [
      'toggleSelectDays'
    ]),
    toggle (d) {
      this.toggleSelectDays(d)
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
