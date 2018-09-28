<template>
  <div v-if="stats">
    <table>
      <thead>
        <tr>
          <th scope="col">Final Time</th>
          <th scope="col">Success Rate</th>
          <th scope="col">Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(statLine, index) in orderedStats" :key="index">
          <td>{{statLine.finalTime}}</td>
          <td>{{statLine.successRate}}</td>
          <td>{{statLine.date | formatDate}}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else>
    <p>Nothing to see here.</p>
  </div>
</template>

<script>
import _ from 'lodash'
import format from 'date-fns/format'

export default {
  name: 'MemoryCardGameStatistics',
  data () {
    return {
      stats: ''
    }
  },
  filters: {
    formatDate (val) {
      return format(val, 'MM/DD/YYYY');
    }
  },
  created () {
    this.stats = JSON.parse( localStorage.getItem('stats') );
  },
  computed: {
    orderedStats () {
      return _.orderBy(this.stats, 'date', 'desc');
    }
  }
}
</script>

