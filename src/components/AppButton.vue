<template>
  <button type="button" :class="{block: isBlock, full: isFullWidth}" @click="clickEvt">{{text}}</button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    text: {
      type: String,
      required: true
    },
    clickEvt: { 
      type: Function,
      required: true
    },
    isBlock: Boolean,
    isFullWidth: Boolean
  }
}
</script>

<style lang="scss" scoped>
  button {
    display: inline-block;
    padding: ms(0) ms(2);
    appearance: none;
    border: none;
    border-radius: 30px;
    background-color: $green;
    color: rgba($white, .9);
    font-size: ms(-1);
    font-weight: map-get($font-weight, bold);
    letter-spacing: ms(-9);
    text-transform: uppercase;
    @include hover-transition(background-color);

    &.block {
      display: block;
    }

    &.full {
      width: 100%;
    }

    &:hover {
      cursor: pointer;
      background-color: $lt-green;
    }

    &:focus {
      background-color: $dark-green;
    }
  }
</style>


