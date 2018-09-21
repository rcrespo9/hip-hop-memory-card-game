<template>
  <p :class="{ show: allPairsFound }">You did it! You won the game in {{finalTime}} with a {{successRate}} success rate!</p>
</template>

<script>
export default {
  name: 'MemoryCardGameVictoryScreen',
  props: {
    allPairsFound: Boolean,
    finalTime: String,
    successRate: String
  }
}
</script>

<style>
  p {
    display: none;
  }

  .show {
    display: block;
  }
</style>