<template>
  <div class="yearly mt-3">
    <form>
      <div class="form-group row mb-3">
        <interval unit="Year(s)" class="col-sm-offset-2" />
      </div>
      <div class="form-group row d-flex align-items-sm-center mb-3">
        <div class="col-sm-1 col-sm-offset-2">
          <input class="form-check-input" type="radio" v-model="yearlyState" value="on"/>
        </div>
        <on :class="{'opacity-50': yearlyState === 'onthe'}" :state="yearlyState" />
      </div>
      <div class="form-group row d-flex align-items-sm-center">
        <div class="col-sm-1 col-sm-offset-2">
          <input class="form-check-input" type="radio" v-model="yearlyState" value="onthe"/>
        </div>
        <on-the :class="{'opacity-50': yearlyState === 'on'}" :state="yearlyState" />
      </div>

    </form>
  </div>
</template>

<script>
import Interval from '../interval.vue'
import On from './on.vue'
import OnThe from './onthe.vue'

import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'YearlyIndex',
  props: {
  },
  components: {
    On, OnThe, Interval
  },
  computed: {
    ...mapGetters('rruleGenerator', [
      'options'
    ]),
    yearlyState: {
      get () {
        if(this.options.bysetpos) {
          return 'onthe'
        } else {
          return 'on'
        }
      },
      set (val) {
        this.resetRRule(['Month', 'MonthDay', 'WeekDay', 'Pos'])
        if(val === 'on') {
          this.updateRRule({ Month: 0, MonthDay: 1 })
        } else {
          this.updateRRule({ Month: 1, WeekDay: 0, Pos: 1 })
        }
      }
    }
  },
  methods: {
    ...mapActions('rruleGenerator', [
      'updateRRule',
      'resetRRule'
    ])
  },
}
</script>
