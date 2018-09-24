<template>
  <div id="app">
    <div class="site-container">
      <main>
        <MemoryCardGame />
      </main>
    </div>
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

<style lang="scss">
@import "~normalize.css";

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
