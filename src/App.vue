<template>
  <div id="app">
    <MemoryCardGame />
  </div>
</template>

<script>
import MemoryCardGame from './components/MemoryCardGame.vue'

export default {
  name: 'app',
  components: {
    MemoryCardGame
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
