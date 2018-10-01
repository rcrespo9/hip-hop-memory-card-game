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
    <button @click="resetGame">Reset</button>
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
      margin-bottom: ms(0);
      padding: ms(2) ms(1);
      border-radius: 2px;
      background-color: $white;
    }

      .scoreboard__attr {
        &:not(:last-of-type) {
          margin-bottom: ms(0);
        }
      }

        .attr__key {
          margin-bottom: ms(-7);
          font-size: ms(1);
          font-weight: 600;
        }

        .attr__val {
          margin: 0;
          font-size: ms(1);
        }
</style>
