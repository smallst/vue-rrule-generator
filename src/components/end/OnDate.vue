<template>
  <div class="onDate">
    <input class="form-control" type="date" v-model="_date"/>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'OnDate',
  computed: {
    _date: {
      get () {
        if(this.options.until) {
          return new Date(this.options.until).toISOString().split('T')[0]
        }
        return new Date().toISOString().split('T')[0]
      },
      set(val) {
        this.updateRRule({Until: new Date(val)})
      }
    },
    ...mapGetters('rruleGenerator', [
      'options',
      'initFromString'
    ])
  },
  methods: {
    ...mapActions('rruleGenerator', [
      'updateRRule'
    ]),
  }
}
</script>