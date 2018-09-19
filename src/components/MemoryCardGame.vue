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
      isNewGame: false,
      attempts: 0,
      matchedPairs: 0,
      timer: "0:00",
      randomCardsAmt: 18,
      selectedCards: []
    }
  },
  computed: {
    gameCards() {
      const randomCards = _.sampleSize(this.Rappers, this.randomCardsAmt);
      const duplicatedCards = randomCards.reduce((acc, curr) => acc.concat([curr, curr]), []);
      const shuffledCards = _.shuffle(duplicatedCards);
      
      return shuffledCards;
    }
  }
}
</script>

<style>
  @import "~normalize.css";
</style>


