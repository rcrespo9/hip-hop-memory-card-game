<template>
  <article>
    <div class="memory-game-container"> 
      <header>
        <h1>Hip Hop Memory Card Game</h1>
        <MemoryCardGameScoreboard 
          :timer="gameTimer"
          :attempts="attempts"
          :matched-pairs-count="matchedPairsCount"
        />  
        <router-link to="/statistics">Stats</router-link>
      </header> 
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
      :all-pairs-found="allPairsFound" 
      :success-rate="successRate" 
      :final-time="finalTime" 
      :start-new-game="startNewGame" 
    />
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
    return this.initialData();
  },
  computed: {
    successRate () {
      let successRatePercentage;

      if (this.attempts) {
        successRatePercentage = `${(this.matchedPairsCount / this.attempts).toFixed(2) * 100}%`;
      }

      return successRatePercentage;
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
        pairsAmount: 10,
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
      }

      if ( localStorage.getItem('stats') === null ) {
        storeStats();
      } else {
        stats = JSON.parse( localStorage.getItem('stats') );
        storeStats();
      }
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
          }, 1500);
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
  .memory-game-container {
    display: grid;
    grid-template-columns: 15% 85%;
    grid-gap: $global-gutter;
  }
</style>


