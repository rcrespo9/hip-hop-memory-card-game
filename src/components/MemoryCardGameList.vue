<template>
  <ul class="memory-cards-list">
    <slot></slot>
  </ul>
</template>

<script>

export default {
  name: 'MemoryCardGameList'
}
</script>

<style lang="scss" scoped>
  .memory-cards-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: $global-gutter;
    grid-row-gap: $global-gutter;
    margin-top: ms(1);
    margin-bottom: 0;
    padding: 0;
    list-style-type: none;

    @include media-query($sm-screen) {
      margin-top: 0;
    }
  }
</style>

