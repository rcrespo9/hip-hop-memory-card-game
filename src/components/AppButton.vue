<template>
  <button type="button" class="button" @click="clickEvt">{{text}}</button>
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
    font-weight: map-get($font-weight, bold);
    letter-spacing: ms(-8);
    text-transform: uppercase;
    @include hover-transition(background-color);

    &:hover {
      cursor: pointer;
      background-color: $lt-green;
    }

    &:focus {
      background-color: $dark-green;
    }
  }
</style>


