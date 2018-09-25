<template>
  <div class="victory-screen" :class="{ show: this.allPairsFound && !victoryScreenClosed  }">
    <div class="victory-screen__inner">
      <p>You did it! You won the game in {{finalTime}} with a {{successRate}} success rate!</p>
      <button @click="startNewGame">Start New Game</button>
      <button @click="closeVictoryScreen">Exit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MemoryCardGameVictoryScreen',
  data () {
    return {
      victoryScreenClosed: false
    }
  },
  props: {
    allPairsFound: Boolean,
    finalTime: String,
    successRate: String,
    startNewGame: Function
  },
  methods: {
    closeVictoryScreen () {
      this.victoryScreenClosed = true;
    }
  }
}
</script>

<style scoped>
  .victory-screen {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    display: none;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
  }

  .show {
    display: flex;
  }
</style>