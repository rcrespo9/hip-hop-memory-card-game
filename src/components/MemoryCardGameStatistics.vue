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
          <td>{{statLine.date}}</td>
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

export default {
  name: 'MemoryCardGameStatistics',
  data () {
    return {
      stats: ''
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

