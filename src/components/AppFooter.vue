<template>
  <footer>
    <p>Built by <a href="https://rudycrespo.com">Rudy Crespo</a></p>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style lang="scss" scoped>
  footer {
    padding: ms(1) 0;
  }

  p {
    margin: 0;
    color: $lt-gray;
    font-size: ms(-1);
  }

  a {
    @include anchor-styles($has-border: false);
  }
</style>

