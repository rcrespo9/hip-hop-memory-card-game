<template>
  <li class="memory-card" :class="{ match: isMatch, selected: isSelected }" @click="selectedCard">
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
    },
    isSelected: {
      type: Boolean,
      default: false
    },
    isMatch: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    selectedCard () {
      if(!this.isSelected) {
        this.$emit('add-card');
      }
    }
  }
}
</script>

<style scoped>
  .memory-card:hover {
    cursor: pointer;
  }

  /* temporary styles */
  .match {
    color: green !important;
  }

  .selected {
    color: blue;
  }
</style>

