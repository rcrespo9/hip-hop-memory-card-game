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
  </article>
</template>

<script>
import MemoryCardGameScoreboard from './MemoryCardGameScoreboard.vue'
import MemoryCardGameList from './MemoryCardGameList.vue'
import MemoryCardGameListItem from './MemoryCardGameListItem.vue'
import Rappers from '../assets/data/rappers'
import _ from 'lodash'

export default {
  name: 'MemoryCardGame',
  components: {
    MemoryCardGameScoreboard,
    MemoryCardGameList,
    MemoryCardGameListItem
  },
  data () {
    return {
      Rappers,
      randomCardsAmt: 18,
      isNewGame: false,
      timer: "0:00",
      attempts: 0,
      matchedPairsCount: 0,
      matchedPairs: [],
      selectedCards: []
    }
  },
  computed: {
    gameCards () {
      const randomCards = _.sampleSize(this.Rappers, this.randomCardsAmt);
      const duplicatedCards = randomCards.reduce((acc, curr) => acc.concat([curr, curr]), []);
      const shuffledCards = _.shuffle(duplicatedCards);
      
      return shuffledCards;
    }
  },
  methods: {
    addSelectedCard (cardId, cardIdx) {
      if (this.selectedCards.length < 2) {
        const selectedCardObj = { cardId, cardIdx };

        this.selectedCards.push(selectedCardObj);
      }
    },
    isCardSelected (cardIdx) {
      return this.selectedCards.some(e => e.cardIdx === cardIdx);
    },
    isCardMatch (cardId) {
      return this.matchedPairs.includes(cardId);
    }
  },
  watch: {
    selectedCards () {
      const isTwoCards = this.selectedCards.length === 2;

      if (isTwoCards) {
        const firstCardId = this.selectedCards[0].cardId;
        const secondCardId = this.selectedCards[1].cardId;
        const areCardsEqual = firstCardId === secondCardId;
        
        if (areCardsEqual) {
          const matchedPairsId = firstCardId;

          this.matchedPairs.push(matchedPairsId);
          this.matchedPairsCount++;
        }

        this.attempts++;
        this.selectedCards = [];
      }
    }
  }
}
</script>

<style>
  
</style>


