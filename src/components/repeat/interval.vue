<template>
  <div class="repeat-interval col-sm-10 row d-flex align-items-sm-center">
    <div class="col-md-2 col-sm-2">
      Every
    </div>
    <div class="col-md-4 col-sm-4">
      <input class="form-control" name="interval" type="number" min="1" v-model.number="interval" />
    </div>
    <div class="col-md-2 col-sm-2">
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
    ]),
    interval: {
      get () {
        return this.options.interval || 1
      },
      set (val) {
        this.updateRRule({Interval: val})
      }
    }
  },
  methods: {
    ...mapActions('rruleGenerator', [
      'updateRRule',
      'resetRRule'
    ])
  }
}
</script>
