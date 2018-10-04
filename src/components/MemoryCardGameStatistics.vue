<template>
  <div v-if="stats">
    <card>
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
            <td data-header="Final Time">
              <span>{{statLine.finalTime}}</span>
            </td>
            <td data-header="Success Rate">
              <span>{{statLine.successRate}}</span>
            </td>
            <td data-header="Date">
              <span>{{statLine.date | formatDate}}</span>
            </td>
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
    border-collapse: collapse;
    border-spacing: 0;
  }

    thead {
      @include max-width-mq($xsm-screen-only) {
        @include sr-only;
      }
    }

      th {
        background-color: $md-dark-gray;
        font-weight: map-get($font-weight, semi-bold);
        text-align: left;

        &:first-of-type {
          border-top-left-radius: $global-radius;
          border-bottom-left-radius: $global-radius;
        }

        &:last-of-type {
          border-top-right-radius: $global-radius;
          border-bottom-right-radius: $global-radius;
        }
      }

    th, 
    td {
      padding: ms(0);
      font-size: ms(0);
    }

    tbody tr {
      &:not(:last-of-type) {
        border-bottom: 1px solid rgba($white, .2);
      }
    }

      td {
        @include max-width-mq($xsm-screen-only) {
          display: flex;
          justify-content: space-between;

          &:before {
            content: attr(data-header)":";
            color: $lt-gray;
          }
        }
      }

  .no-stats-msg {
    margin: 0;
    font-size: ms(0);
  }
</style>


