<template>
  <div>
    <MemoryCardGameList :items="rappers" />
  </div>
</template>

<script>
import MemoryCardGameScoreboard from './MemoryCardGameScoreboard.vue'
import MemoryCardGameList from './MemoryCardGameList.vue'

export default {
  name: 'MemoryCardGame',
  components: {
    MemoryCardGameScoreboard,
    MemoryCardGameList
  },
  data () {
    return {
      wins: 0,
      losses: 0,
      timer: 0,
      matchedPairs: 0,
      rappers: [
        {
          id: 0,
          name: 'Nas',
          img: ''
        },
        {
          id: 1,
          name: 'Jay-Z',
          img: ''
        },
      ]
    }
  }
}
</script>

