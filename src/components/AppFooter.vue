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
    padding: ms(2) 0 ms(1);
    color: $lt-gray;
  }

  p {
    font-size: ms(-1);
  }

  a {
    @include anchor-styles($has-border: false);
  }
</style>

