<template>
  <div id="app">
    <div class="site-container">
      <nav>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/statistics">Statistics</router-link>
        </li>
      </nav>
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  body {
    background-color: #fafafa;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .site-container {
    max-width: ms(15);
    margin: 0 auto;
    padding: 0 $global-gutter;
  }
</style>
