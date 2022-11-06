<template>
  <div class="onDate">
    <input class="form-control" type="date" v-model="_date"/>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'OnDate',
  computed: {
    _date: {
      get () {
        return this.date.toISOString().split('T')[0]
      },
      set(val) {
        this.date = new Date(val)
      }
    }
  },
  methods: {
    ...mapActions('rruleGenerator', [
      'updateRRule'
    ])
  },
  data () {
    return {
      date: new Date(),
    }
  },
  watch: {
    date (val) {
      this.updateRRule({Until: val})
    }
  },
  created() {
      this.updateRRule({Until: this.date})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
