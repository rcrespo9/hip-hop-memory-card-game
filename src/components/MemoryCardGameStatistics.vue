<template>
  <div v-if="stats">
    <card>
      <table>
        <thead>
          <tr>
            <th scope="col">Final Time</th>
            <th scope="col">Tries</th>
            <th scope="col">Success Rate</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(statLine, index) in orderedStats" :key="index">
            <td data-header="Final Time">{{statLine.finalTime}}</td>
            <td data-header="Tries">{{statLine.tries}}</td>
            <td data-header="Success Rate">{{statLine.successRate}}</td>
            <td data-header="Date">{{statLine.date | formatDate}}</td>
          </tr>
        </tbody>
      </table>
    </card>
  </div>
  <div v-else>
    <card>
      <p class="no-stats-msg">Nothing to see here. Play a game, then come back here to see your statistics.</p>
    </card>
  </div>
</template>

<script>
import _ from 'lodash'
import format from 'date-fns/format'

import Card from './AppCard.vue';

export default {
  name: 'MemoryCardGameStatistics',
  components: {
    Card
  },
  data () {
    return {
      stats: ''
    }
  },
  filters: {
    formatDate (val) {
      if (!val) return '';
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

<style lang="scss" scoped>
  table {
    width: 100%;
  }

    th {
      text-align: left;
    }

  .no-stats-msg {
    margin: 0;
    font-size: ms(0);
  }
</style>


