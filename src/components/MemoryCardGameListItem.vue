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
      isSelected: false
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
    },
    isMatch: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    selectedCard () {
      this.isSelected = true;
      this.$emit('add-card');
    }
  }
}
</script>

<style scoped>
  .memory-card:hover {
    cursor: pointer;
  }
</style>

