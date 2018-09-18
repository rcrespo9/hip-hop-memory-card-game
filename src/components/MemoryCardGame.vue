<template>
  <main>
    <article>
      <MemoryCardGameList :items="Rappers" />
    </article>
  </main>
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
      wins: 0,
      losses: 0,
      timer: 0,
      matchedPairs: 0,
      Rappers
    }
  }
}
</script>

