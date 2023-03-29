<template>
  <div class="start row">
    <label for="start" class="col-sm-2 col-form-label">Start</label>
    <div class="col-sm-4">
      <input class="form-control" name="start" type="datetime" :value="startString" disabled />
    </div>
  </div>
</template>

<script>
export default {
  name: 'StartIndex',
  props: {
    start: {
      type: Date
    }
  },
  computed: {
    startString () {
      return `${this.start.toLocaleDateString()} ${this.start.toLocaleTimeString()}`
      }
  }
}
</script>
