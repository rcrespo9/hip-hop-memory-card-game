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

<style scoped>
  .memory-cards-list {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
</style>

