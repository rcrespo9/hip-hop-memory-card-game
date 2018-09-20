<template>
  <article>
    <header>
      <h1>Hip Hop Memory Card Game</h1>
      <MemoryCardGameScoreboard 
        :timer="timer"
        :attempts="attempts"
        :found="matchedPairs" 
      />
    </header>
    <memory-card-game-list>
      <MemoryCardGameListItem 
        v-for="(rapper, index) in gameCards" 
        :key="index" 
        :name="rapper.name" 
        :img="rapper.img"
        v-on:add-card="addSelectedCard(rapper.id)"
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
  },
  methods: {
    addSelectedCard (objId) {
      this.selectedCards.push(objId);
    }
  }
}
</script>

<style>
  
</style>


