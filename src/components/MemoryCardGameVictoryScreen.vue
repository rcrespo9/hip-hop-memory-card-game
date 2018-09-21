<template>
  <div class="wrapper" :class="{ show: allPairsFound }">
    <p>You did it! You won the game in {{finalTime}} with a {{successRate}} success rate!</p>
    <button @click="startNewGame">Start New Game</button>
  </div>
</template>

<script>
export default {
  name: 'MemoryCardGameVictoryScreen',
  props: {
    allPairsFound: Boolean,
    finalTime: String,
    successRate: String,
    startNewGame: Function
  }
}
</script>

<style scoped>
  .wrapper {
    display: none;
  }

  .show {
    display: block;
  }
</style>