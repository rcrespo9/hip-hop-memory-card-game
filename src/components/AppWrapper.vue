<template>
  <article>
    <h1>{{headerText}}</h1>
    <slot></slot>
  </article>  
</template>

<script>
export default {
  name: 'AppWrapper',
  props: {
    headerText: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  h1 {
    margin-top: 0;
    margin-bottom: ms(-1);
    font-size: ms(2);
    font-weight: map-get($font-weight, bold);
  }

  @include media-query($xsm-screen) {
    font-size: ms(3);
  }
</style>

