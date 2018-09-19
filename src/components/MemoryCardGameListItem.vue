<template>
  <li class="memory-card" @click="selectedCard">
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
  data() {
    return {
      isSelected: false,
      isMatch: false
    }
  },
  props: {
    name: { 
      type: String,
      required: true
    },
    img: { 
      type: String,
      required: true
    }
  },
  methods: {
    selectedCard () {
      this.isSelected = true;
    }
  }
}
</script>

<style scoped>
  .memory-card:hover {
    cursor: pointer;
  }
</style>

