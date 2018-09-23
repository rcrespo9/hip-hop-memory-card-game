<template>
  <dl class="scoreboard">
    <dt class="scoreboard__attr">Timer</dt>
    <dd class="scoreboard__val">{{timer}}</dd>
    <dt class="scoreboard__attr">Tries</dt>
    <dd class="scoreboard__val">{{attempts}}</dd>
    <dt class="scoreboard__attr">Matches</dt>
    <dd class="scoreboard__val">{{matchedPairsCount}}</dd>
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
