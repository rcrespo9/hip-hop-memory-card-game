<template>
  <div class="scoreboard-container">
    <dl class="scoreboard">
      <div class="scoreboard__attr">
        <dt class="attr__key">Timer</dt>
        <dd class="attr__val">{{timer}}</dd>
      </div>

      <div class="scoreboard__attr">
        <dt class="attr__key">Tries</dt>
        <dd class="attr__val">{{attempts}}</dd>
      </div>

      <div class="scoreboard__attr">
        <dt class="attr__key">Matches</dt>
        <dd class="attr__val">{{matchedPairsCount}}</dd>
      </div>
    </dl>
    <button class="scoreboard__btn" @click="resetGame">Reset Game</button>
  </div>
</template>

<script>
export default {
  name: 'MemoryCardGameScoreboard',
  props: {
    timer: {
      type: String,
      required: true
    },
    attempts: {
      type: Number,
      required: true
    },
    matchedPairsCount: {
      type: Number,
      required: true
    },
    resetGame: {
      type: Function,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .scoreboard-container {
    @include col-padding;
  }

    .scoreboard {
      margin-top: 0;
      margin-bottom: ms(1);
      padding: ms(2);
      border-radius: $global-radius;
      background-color: $dark-gray;
    }

      .scoreboard__attr {
        &:not(:last-of-type) {
          margin-bottom: ms(0);
        }
      }

        .attr__key {
          margin-bottom: ms(-9);
          color: $lt-gray;
          font-size: ms(-1);
          font-weight: 700;
        }

        .attr__val {
          margin: 0;
          font-size: ms(2);
        }

      .scoreboard__btn {
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
