<template>
  <ul>
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

</style>

