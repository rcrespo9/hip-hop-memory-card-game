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

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.site-container {
  max-width: ms(14);
  margin: 0 auto;
}

</style>
