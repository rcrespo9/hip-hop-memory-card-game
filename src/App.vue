<template>
  <div id="app">
    <div class="site-container">
      <Header />
      <main id="page-content">
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script>
import Header from './components/AppHeader.vue';

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html {
    font-size: 20px;
  }

  body {
    color: $white;
    background-color: $black;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    line-height: 1.333;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  .site-container {
    max-width: ms(15);
    margin: 0 auto;
    padding: 0 $global-gutter;
  }
</style>
