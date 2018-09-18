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
        <MemoryCardGameList :items="Rappers" />
      </article>
    </main>
  </div>
</template>

<script>
import MemoryCardGameScoreboard from './MemoryCardGameScoreboard.vue'
import MemoryCardGameList from './MemoryCardGameList.vue'
import Rappers from '../assets/data/rappers';

export default {
  name: 'MemoryCardGame',
  components: {
    MemoryCardGameScoreboard,
    MemoryCardGameList
  },
  data () {
    return {
      newGame: false,
      attempts: 0,
      matchedPairs: 0,
      timer: "0:00",
      Rappers
    }
  }
}
</script>

<style>
  @import "~normalize.css";
</style>


