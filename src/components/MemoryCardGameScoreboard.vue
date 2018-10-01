<template>
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
    }
  }
}
</script>

<style lang="scss" scoped>
  .scoreboard {
    margin: 0;
    padding: ms(2) ms(1);
    border-radius: 2px;
    background-color: $white;
    box-shadow: $box-shadow;
  }

    .scoreboard__attr {
      &:not(:last-of-type) {
        margin-bottom: ms(0);
      }
    }

      .attr__key {
        font-size: ms(1);
        font-weight: 500;
      }

      .attr__val {
        margin: 0;
        font-size: ms(0);
      }
</style>
