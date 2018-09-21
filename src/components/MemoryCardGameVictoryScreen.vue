<template>
  <p :class="{ show: allPairsFound }">Won Game!</p>
</template>

<script>
export default {
  name: 'MemoryCardGameVictoryScreen',
  props: {
    allPairsFound: {
      type: Boolean,
      default: false
    }
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