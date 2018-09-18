<template>
  <ul class="c-memory-card-list">
    <MemoryCardGameListItem 
      v-for="rapper in items" 
      :key="rapper.id" 
      :name="rapper.name" 
      :img="rapper.img" 
    /> 
  </ul>
</template>


<script>
import MemoryCardGameListItem from './MemoryCardGameListItem.vue';

export default {
  name: 'MemoryCardGameList',
  components: {
    MemoryCardGameListItem
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
  .c-memory-card-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
</style>

