<template>
  <card>
    <div class="scoreboard">
      <dl class="scoreboard__container">
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
      <Button 
        text="Reset Game" 
        :click-evt="resetGame" 
        :is-block="true"
        :is-full-width="true"
      />
    </div>
  </card>
</template>

<script>
import Card from './AppCard.vue';
import Button from './AppButton.vue';

export default {
  name: 'MemoryCardGameScoreboard',
  components: {
    Card,
    Button
  },
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
    .scoreboard__container {
      margin-top: 0;
      margin-bottom: ms(1);
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
          font-weight: map-get($font-weight, medium);
        }

        .attr__val {
          margin: 0;
          font-size: ms(2);
        }
</style>
