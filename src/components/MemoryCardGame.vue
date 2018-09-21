<template>
  <article>
    <header>
      <h1>Hip Hop Memory Card Game</h1>
      <MemoryCardGameScoreboard 
        :timer="gameTimer"
        :attempts="attempts"
        :matched-pairs-count="matchedPairsCount" 
      />
    </header>
    <memory-card-game-list>
      <MemoryCardGameListItem 
        v-for="(rapper, index) in gameCards" 
        :key="index" 
        :name="rapper.name" 
        :img="rapper.img"
        :is-selected="isCardSelected(index)"
        :is-match="isCardMatch(rapper.id)"
        v-on:add-card="addSelectedCard(rapper.id, index)"
      />
    </memory-card-game-list>
    <MemoryCardGameVictoryScreen :all-pairs-found="allPairsFound" :success-rate="successRate" :final-time="finalTime" />
  </article>
</template>

<script>
import MemoryCardGameScoreboard from './MemoryCardGameScoreboard.vue'
import MemoryCardGameVictoryScreen from './MemoryCardGameVictoryScreen';
import MemoryCardGameList from './MemoryCardGameList.vue'
import MemoryCardGameListItem from './MemoryCardGameListItem.vue'
import Rappers from '../assets/data/rappers'
import Timer from 'easytimer.js';
import _ from 'lodash'

export default {
  name: 'MemoryCardGame',
  components: {
    MemoryCardGameScoreboard,
    MemoryCardGameVictoryScreen,
    MemoryCardGameList,
    MemoryCardGameListItem
  },
  data () {
    return {
      Rappers,
      pairsAmount: 18,
      isNewGame: false,
      gameTimer: '00:00',
      timer: new Timer(),
      finalTime: '',
      attempts: 0,
      allPairsFound: false,
      matchedPairsCount: 0,
      matchedPairs: [],
      selectedPair: []
    }
  },
  computed: {
    gameCards () {
      const randomCards = _.sampleSize(this.Rappers, this.pairsAmount);
      const duplicatedCards = randomCards.reduce((acc, curr) => acc.concat([curr, curr]), []);
      const shuffledCards = _.shuffle(duplicatedCards);
      
      return shuffledCards;
    },
    successRate () {
      let successRatePercentage;

      if (this.attempts) {
        successRatePercentage = `${(this.matchedPairsCount / this.attempts).toFixed(2) * 100}%`;
      }

      return successRatePercentage;
    }
  },
  mounted () {
    this.startGameTimer();
  },
  methods: {
    addSelectedCard (cardId, cardIdx) {
      if (this.selectedPair.length < 2) {
        const selectedCardObj = { cardId, cardIdx };

        this.selectedPair.push(selectedCardObj);
      }
    },
    isCardSelected (cardIdx) {
      return this.selectedPair.some(e => e.cardIdx === cardIdx);
    },
    isCardMatch (cardId) {
      return this.matchedPairs.includes(cardId);
    },
    startGameTimer () {
      this.timer.start();
      this.timer.addEventListener('secondsUpdated', (e) => {
        this.gameTimer = this.timer.getTimeValues().toString(['minutes', 'seconds']);
      })
    },
    wonGame () {
      this.allPairsFound = true;
      this.timer.stop();
      this.finalTime = this.gameTimer;
    }
  },
  watch: {
    selectedPair () {
      const isTwoCards = this.selectedPair.length === 2;

      if (isTwoCards) {
        const areCardsEqual = this.selectedPair.every( (val, i, arr) => val.cardId === arr[0].cardId );
        
        if (areCardsEqual) {
          const matchedPairsId = this.selectedPair[0].cardId;

          this.matchedPairs.push(matchedPairsId);
          this.matchedPairsCount++;
        }

        this.attempts++;
        this.selectedPair = [];
      }
    },
    matchedPairsCount (newCount) {
      if (newCount === this.pairsAmount) {
        this.wonGame();
      }
    }
  }
}
</script>

<style>
  
</style>


