<template>
  <dl class="scoreboard">
    <div>
      <dt class="scoreboard__attr">Timer</dt>
      <dd class="scoreboard__val">{{timer}}</dd>
    </div>

    <div>
      <dt class="scoreboard__attr">Tries</dt>
      <dd class="scoreboard__val">{{attempts}}</dd>
    </div>

    <div>
      <dt class="scoreboard__attr">Matches</dt>
      <dd class="scoreboard__val">{{matchedPairsCount}}</dd>
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
</style>
