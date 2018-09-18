<template>
  <dl class="c-scoreboard">
    <dt class="c-scoreboard__attr">Timer</dt>
    <dd class="c-scoreboard__val">{{timer}}</dd>
    <dt class="c-scoreboard__attr">Attempts</dt>
    <dd class="c-scoreboard__val">{{attempts}}</dd>
    <dt class="c-scoreboard__attr">Found</dt>
    <dd class="c-scoreboard__val">{{found}}</dd>
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
