<template>
  <div class="c-site-container">
    <main>
      <article>
        <header>
          <h1>Hip Hop Memory Card Game</h1>
          <MemoryCardGameScoreboard 
            :timer="timer"
            :attempts="attempts"
            :found="matchedPairs" 
          />
        </header>
        <MemoryCardGameList :items="gameCards" />
      </article>
    </main>
  </div>
</template>

<script>
import MemoryCardGameScoreboard from './MemoryCardGameScoreboard.vue'
import MemoryCardGameList from './MemoryCardGameList.vue'
import Rappers from '../assets/data/rappers';
import _ from 'lodash';

export default {
  name: 'MemoryCardGame',
  components: {
    MemoryCardGameScoreboard,
    MemoryCardGameList
  },
  data () {
    return {
      Rappers,
      newGame: false,
      attempts: 0,
      matchedPairs: 0,
      timer: "0:00",
      boardSize: 6,
      gameCards: [],
      selectedCards: []
    }
  },
  mounted() {
    let randomSelectionsArr = _.sampleSize(this.Rappers, this.boardSize);
    this.gameCards = randomSelectionsArr;
  }
}
</script>

<style>
  @import "~normalize.css";
</style>


