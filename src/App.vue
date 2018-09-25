<template>
  <div id="app">
    <div class="site-container">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .site-container {
    max-width: ms(15);
    margin: 0 auto;
    padding: 0 $global-gutter;
  }
</style>
