<template>
  <div id="app">
    <div class="site-container">
      <Header />
      <main class="site-content" id="page-content">
        <router-view/>
      </main>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from './components/AppHeader.vue';
import Footer from './components/AppFooter.vue';

export default {
  components: {
    Header,
    Footer
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
    font-size: 14px;

    @include media-query($xsm-screen) {
      font-size: 16px;
    }

    @include media-query($md-screen) {
      font-size: 18px;
    }

    @include media-query($lg-screen) {
      font-size: 20px;
    }

    @include media-query($xlg-screen) {
      font-size: ms(1, 1vw);
    }
  }

    body {
      color: $white;
      background-color: $black;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      line-height: 1.333;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      &.no-scroll {
        overflow: hidden;
      }
    }
    
      .site-container {
        display: flex;
        flex-direction: column;
        max-width: ms(14);
        min-height: 100vh;
        margin: 0 auto;
        padding: 0 $global-gutter;
      }

        .site-content {
          flex: 1;
          margin-bottom: ms(1);
        }
</style>
