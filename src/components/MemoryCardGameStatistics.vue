<template>
  <table>
    <caption>Statistics</caption>
    <thead>
      <tr>
        <th scope="col">Final Time</th>
        <th scope="col">Success Rate</th>
        <th scope="col">Date</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(statLine, index) in stats" :key="index">
        <td>{{statLine.finalTime}}</td>
        <td>{{statLine.successRate}}</td>
        <td>{{statLine.date}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'MemoryCardGameStatistics',
  data () {
    return {
      stats: ''
    }
  },
  created () {
    this.stats = JSON.parse( localStorage.getItem('stats') );
  }
}
</script>

