<template>
  <div class="end row">
    <label for="end" class="col-sm-2 col-form-label">End</label>
    <div class="col-sm-4">
      <select class="form-select" name="end" v-model="endState">
        <option v-for="op in endOptions" :value="op" :key="op">{{op}}</option>
      </select>
    </div>
    <div class="col-sm-6">
      <after
        v-if="endState === 'After'"
      />
      <on-date
        v-if="endState === 'OnDate'"
      />
    </div>
  </div>
</template>

<script>
import After from './After.vue'
import OnDate from './OnDate.vue'

import {mapActions} from 'vuex'
export default {
  name: 'EndIndex',
  props: {
  },
  components: {
    After,
    OnDate
  },
  data () {
    return {
      endState: 'After'
    }
  },
  computed: {
    endOptions () {
      return ['Never', 'After', 'OnDate']
    }
  },
  methods: {
    ...mapActions('rruleGenerator', [
      'resetRRule'
    ])
  },
  watch: {
    endState (val, ov) {
      switch(ov) {
          case 'After':
          this.resetRRule(['Count'])
          break;
          case 'OnDate':
          this.resetRRule(['Until'])
          break
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
