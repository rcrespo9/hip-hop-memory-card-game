<template>
  <li class="memory-card" @click="selectedCard">
    <div class="memory-card__flipper" :class="{ flipped: isSelected || isMatch }">
      <div class="memory-card__front">
        Front
      </div>
      <div class="memory-card__back">
        {{name}}
        <!-- <img class="memory-card__img" :src="require(`@/assets/rappers-imgs/${img}`)" :alt="name"> -->
      </div>
    </div>
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
      this.$emit('add-card');
    }
  }
}
</script>

<style lang="scss" scoped>
  .memory-card {
    border-radius: 4px;
    perspective: 800px;

    &:hover {
      cursor: pointer;
    }
  }

  .memory-card,
  .memory-card__front,
  .memory-card__back {
    width: 9.969em;
    height: 9.969em;
  }

  .memory-card__flipper {
    position: relative;
    transform-style: preserve-3d;
    transition: transform .5s ease-in-out;

    &.flipped {
      transform: rotateY(180deg);
    }
  }

  .memory-card__front,
  .memory-card__back {
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden;
  }

  .memory-card__front {
    z-index: 2;
    transform: rotateY(0);
  }

  .memory-card__back {
    transform: rotateY(-180deg);
  }

  .memory-card__img {
    width: 100%;
    height: auto;
  }
</style>

