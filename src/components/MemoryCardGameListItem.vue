<template>
  <li class="c-memory-card">
    <span class="c-memory-card__front"></span>
    <span class="c-memory-card__back">
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

</style>

