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
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
</style>

