<template>
  <div class="memory-game">
    <div class="memory-game__grid"> 
      <MemoryCardGameScoreboard 
        :timer="gameTimer"
        :attempts="attempts"
        :matched-pairs-count="matchedPairsCount"
        :resetGame="startNewGame"
      /> 
      <MemoryCardGameList>
        <MemoryCardGameListItem 
          v-for="(rapper, index) in gameCards" 
          :key="index" 
          :name="rapper.name" 
          :img="rapper.img"
          :is-selected="isCardSelected(index)"
          :is-match="isCardMatch(rapper.id)"
          v-on:add-card="addSelectedCard(rapper.id, index)"
        />
      </MemoryCardGameList>
    </div>
    <MemoryCardGameVictoryScreen 
      v-show="showVictoryScreen" 
      :success-rate="successRate" 
      :final-time="finalTime" 
      :start-new-game="startNewGame" 
      :close-screen="closeVictoryScreen"
    />
  </div>
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
    return this.initialData();
  },
  computed: {
    successRate () {
      let successRatePercentage;

      if (this.attempts) {
        const decVal = (this.matchedPairsCount / this.attempts) * 100;
        const roundedVal = Math.round(decVal);
        
        successRatePercentage = `${roundedVal}%`;
      }

      return successRatePercentage;
    },
    areThereStats () {
      return localStorage.getItem('stats') !== null;
    }
  },
  created () {
    this.initGame();
  },
  methods: {
    initialData () {
      return {
        Rappers,
        gameCards: [],
        pairsAmount: 6,
        gameTimer: '00:00',
        timer: new Timer(),
        finalTime: '',
        attempts: 0,
        allPairsFound: false,
        showVictoryScreen: false,
        matchedPairsCount: 0,
        matchedPairs: [],
        selectedPair: []
      }
    },
    initGame () {
      this.addGameCards();
      this.startGameTimer();
    },
    addGameCards () {
      const randomCards = _.sampleSize(this.Rappers, this.pairsAmount);
      const duplicatedCards = randomCards.reduce((acc, curr) => acc.concat([curr, curr]), []);
      const shuffledCards = _.shuffle(duplicatedCards);
      
      this.gameCards = shuffledCards;
    },
    addSelectedCard (cardId, cardIdx) {
      if (this.selectedPair.length < 2 && !this.isCardSelected(cardIdx) && !this.isCardMatch(cardId)) {
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
      this.timer.addEventListener('secondsUpdated', () => {
        this.gameTimer = this.timer.getTimeValues().toString(['minutes', 'seconds']);
      });
    },
    startNewGame () {
      Object.assign( this.$data, this.initialData() );
      this.initGame();
    },
    wonGame () {
      this.allPairsFound = true;
      this.showVictoryScreen = true;
      this.finalTime = this.gameTimer;
      this.timer.stop();
      this.saveStatsToLocalStorage();
    },
    saveStatsToLocalStorage () {
      let stats = [];
      
      const game = {
        finalTime: this.finalTime,
        successRate: this.successRate,
        date: new Date()
      };

      const storeStats = () => {
        stats.push(game);
        localStorage.setItem( 'stats', JSON.stringify(stats) );        
      };

      if ( localStorage.getItem('stats') === null ) {
        storeStats();
      } else {
        stats = JSON.parse( localStorage.getItem('stats') );
        storeStats();
      }
    },
    closeVictoryScreen () {
      this.showVictoryScreen = false;
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
          this.selectedPair = [];
        } else {
          setTimeout(() => {
            this.selectedPair = [];
          }, 700);
        }

        this.attempts++;
      }
    },
    matchedPairsCount (count) {
      if (count === this.pairsAmount) {
        this.wonGame();
      }
    }
  }
}
</script>

<style lang="scss">
  .memory-game__grid {
    display: grid;
    grid-template-columns: column-width(3) 1fr;
    column-gap: ms(2);
  }
</style>


