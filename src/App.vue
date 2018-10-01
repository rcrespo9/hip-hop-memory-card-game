<template>
  <div id="app">
    <div class="site-container">
      <header>
        <nav>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/statistics">Statistics</router-link>
          </li>
        </nav>
      </header>
      <main>
        <router-view/>
      </main>
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
    color: $black;
    background-color: $lt-gray;
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

  main {
    padding-top: ms(2);
  }
</style>
