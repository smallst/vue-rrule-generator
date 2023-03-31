<template>
  <div class="after form-group m-0 row d-flex align-items-center">
    <div class="col-3 col-sm-6 pl-0">
      <input class="form-control" type="number" min="1" v-model.number="count"/>
    </div>
    <div class="col-9 col-sm-2">
      executions
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'EndAfter',
  computed: {
    ...mapGetters('rruleGenerator', [
      'options',
    ]),
    count: {
      get () {
        return this.options.count || 1
      },
      set (val) {
        this.updateRRule({Count: val})
      },
    }
  },
  methods: {
    ...mapActions('rruleGenerator', [
      'updateRRule'
    ])
  }
}
</script>
