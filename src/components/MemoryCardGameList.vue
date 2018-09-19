<template>
  <ul class="memory-cards-list">
    <slot></slot>
  </ul>
</template>

<script>
import MemoryCardGameListItem from './MemoryCardGameListItem.vue';

export default {
  name: 'MemoryCardGameList'
}
</script>

<style scoped>
  .memory-cards-list {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
</style>

