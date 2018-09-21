<template>
  <article>
    <header>
      <h1>Hip Hop Memory Card Game</h1>
      <MemoryCardGameScoreboard 
        :timer="timer"
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
    <MemoryCardGameVictoryScreen :all-pairs-found="allPairsFound" />
  </article>
</template>

<script>
import MemoryCardGameScoreboard from './MemoryCardGameScoreboard.vue'
import MemoryCardGameVictoryScreen from './MemoryCardGameVictoryScreen';
import MemoryCardGameList from './MemoryCardGameList.vue'
import MemoryCardGameListItem from './MemoryCardGameListItem.vue'
import Rappers from '../assets/data/rappers'
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
      timer: "0:00",
      attempts: 0,
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
    allPairsFound () {
      return this.pairsAmount === this.matchedPairsCount;
    }
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
    }
  },
  watch: {
    selectedPair () {
      const isTwoCards = this.selectedPair.length === 2;

      if (isTwoCards) {
        const areCardsEqual = this.selectedPair.every( (val, i, arr) => val.cardId === arr[0].cardId );
        
        if (areCardsEqual) {
          const matchedPairsId = _.head(this.selectedPair).cardId;

          this.matchedPairs.push(matchedPairsId);
          this.matchedPairsCount++;
        }

        this.attempts++;
        this.selectedPair = [];
      }
    }
  }
}
</script>

<style>
  
</style>


