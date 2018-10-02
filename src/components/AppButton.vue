<template>
  <button type="button" class="button" @click="clickEvt">{{text}}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      required: true
    },
    clickEvt: { 
      type: Function,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .button {
    display: block;
    width: 100%;
    padding: ms(1) ms(1);
    appearance: none;
    border: none;
    border-radius: 30px;
    background-color: $green;
    color: rgba($white, .9);
    font-size: ms(-1);
    font-weight: 700;
    letter-spacing: ms(-9);
    text-transform: uppercase;
    transition: background-color .2s ease-in-out;

    &:hover {
      cursor: pointer;
      background-color: $lt-green;
    }

    &:focus {
      background-color: $dark-green;
    }
  }
</style>


