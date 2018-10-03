<template>
  <div class="victory-screen">
    <div class="victory-screen__inner">
      <p class="victory-screen__msg">You did it! You won the game in {{finalTime}} with a {{successRate}} success rate!</p>
      <button-group>
        <Button 
          text="Start New Game" 
          :click-evt="startNewGame" 
        />
        <Button 
          text="Exit" 
          :click-evt="closeScreen" 
        />
      </button-group>
    </div>
  </div>
</template>

<script>
import Button from './AppButton.vue'
import ButtonGroup from './AppButtonGroup.vue'

export default {
  name: 'MemoryCardGameVictoryScreen',
  components: {
    Button,
    ButtonGroup
  },
  props: {
    finalTime: String,
    successRate: String,
    startNewGame: Function,
    closeScreen: Function
  }
}
</script>

<style lang="scss" scoped>
  .victory-screen {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    padding: 0 $global-gutter;
    // background-image: url('~/assets/flava-flav.gif');
    // background-size: cover;
    // background-repeat: no-repeat;
    // background-position: center;
  }

    .victory-screen__inner {
      position: relative;
      max-width: ms(13);
      text-align: center;
    }

      .victory-screen__msg {
        margin-top: 0;
        margin-bottom: ms(-2);
        font-size: ms(3);
      }
</style>

You did it! You won the game in 0:00 with a 35% success rate!