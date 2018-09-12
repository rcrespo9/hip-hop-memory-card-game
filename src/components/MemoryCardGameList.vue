<template>
  <ul>
    <MemoryCardGameListItem v-for="rapper in rappers" v-bind:key="rapper.id" v-bind:name="rapper.name" v-bind:img="rapper.img" /> 
  </ul>
</template>


<script>
import MemoryCardGameListItem from './MemoryCardGameListItem.vue';

export default {
  name: 'MemoryCardGameList',
  components: {
    MemoryCardGameListItem
  },
  data () {
    return {
      rappers: [
        {
          id: 0,
          name: 'Nas',
          img: ''
        },
        {
          id: 1,
          name: 'Jay-Z',
          img: ''
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>

