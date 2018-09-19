<template>
  <dl class="scoreboard">
    <dt class="scoreboard__attr">Timer</dt>
    <dd class="scoreboard__val">{{timer}}</dd>
    <dt class="scoreboard__attr">Attempts</dt>
    <dd class="scoreboard__val">{{attempts}}</dd>
    <dt class="scoreboard__attr">Found</dt>
    <dd class="scoreboard__val">{{found}}</dd>
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
    found: {
      type: Number,
      required: true
    }
  }
}
</script>
