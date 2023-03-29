<template>
  <div class="end row">
    <label for="end" class="col-sm-2 col-form-label">End</label>
    <div class="col-sm-4">
      <select class="form-control" name="end" v-model="endState">
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

import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'EndIndex',
  props: {
  },
  components: {
    After,
    OnDate
  },
  computed: {
    ...mapGetters('rruleGenerator', [
      'options'
    ]),
    endState: {
      get () {
        if(this.options.until) {
          return 'OnDate'
        } else if(this.options.count) {
          return 'After'
        } else {
          return 'Never'
        }
      },
      set (val) {
        this.resetRRule(['Count', 'Until'])
        if(val === 'OnDate') {
          this.updateRRule({Until: new Date()})
        } else if(val === 'After') {
          this.updateRRule({Count: 1})
        }
      }
    },
    endOptions () {
      return ['Never', 'After', 'OnDate']
    }
  },
  methods: {
    ...mapActions('rruleGenerator', [
      'resetRRule',
      'updateRRule'
    ]),
  }
}
</script>
