<template>
  <li class="memory-card" @click="selectCard">
    <div class="memory-card__flipper" :class="{ flipped: isSelected || isMatch }">
      <div class="memory-card__front">
        <span class="front__img"></span>
      </div>
      <div class="memory-card__back">
        <img class="back__img" :src="require(`@/assets/rapper-imgs/${img}`)" :alt="name">
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
    selectCard () {
      this.$emit('add-card');
    }
  }
}
</script>

<style lang="scss" scoped>
  .memory-card {
    justify-self: center;
    width: 100%;
    perspective: 900px;

    &:hover {
      cursor: pointer;
    }    
  }

    .memory-card__flipper {
      position: relative;
      width: inherit;
      padding-bottom: 100%;
      transform-style: preserve-3d;
      border-radius: $global-radius;
      transition: transform .3s ease-in-out, box-shadow .3s cubic-bezier(.25,.8,.25,1);

      &.flipped {
        transform: rotateY(180deg);
      }
    }

      .memory-card__front,
      .memory-card__back {
        position: absolute;
        top: 0;
        left: 0;
        width: inherit;
        height: 100%;
        padding-bottom: inherit;
        border-radius: inherit;
        backface-visibility: hidden;
      }

        .front__img,
        .back__img {
          width: inherit;
          border-radius: inherit;
        }
      
      .memory-card__front {
        z-index: 1;
        transform: rotateY(0);
      }

        .front__img {
          display: block;
          padding-bottom: inherit;
          background-color: $green;
          background-image: url($memory-card-back-img);
          background-position: center;
        }

      .memory-card__back {
        transform: rotateY(-180deg);
      }

        .back__img {
          height: auto;
        }
</style>

