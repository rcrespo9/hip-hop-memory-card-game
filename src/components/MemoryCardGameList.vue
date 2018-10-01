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
    list-style-type: none;
    margin: 0;
    @include col-padding;
  }
</style>

