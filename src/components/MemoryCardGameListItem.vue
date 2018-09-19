<template>
  <li class="memory-card">
    <span class="memory-card__front"></span>
    <span class="memory-card__back">
      {{name}}
      <!-- <img :src="require(`@/assets/rappers-imgs/${img}`)" :alt="name"> -->
    </span>
  </li>
</template>

<script>
export default {
  name: 'MemoryCardGameListItem',
  props: {
    name: { 
      type: String,
      required: true
    },
    img: { 
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  .memory-card:hover {
    cursor: pointer;
  }
</style>

