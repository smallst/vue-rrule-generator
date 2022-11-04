<template>
  <div class="onDate">
    <input class="form-control" type="date" v-model="_date"/>
  </div>
</template>

<script>
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
  data () {
    return {
      date: new Date(),
    }
  },
  watch: {
    date (val) {
      this.$emit('update-date', val)
    }
  },
  created() {
    this.$emit('update-date', this.date)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
