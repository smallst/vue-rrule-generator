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
        return this.date.toISOString().split('T')[0]
      },
      set(val) {
        this.date = new Date(val)
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
    init () {
      this.initing = true
      this.date = new Date(this.options.until)
      this.$nextTick(() => this.initing = false)
    }
  },
  data () {
    return {
      date: new Date(),
      initing: false
    }
  },
  watch: {
    date (val) {
      if(this.initing) return
      this.updateRRule({Until: val})
    }
  },
  created() {
    if(!this.initFromString) {
      this.updateRRule({Until: this.date})
    } else {
      this.init()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
