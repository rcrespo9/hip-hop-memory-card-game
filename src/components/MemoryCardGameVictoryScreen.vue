<template>
  <div class="victory-screen">
    <video class="victory-screen__vid" autoplay loop muted src="@/assets/flava-flav.mp4">
      Sorry, your browser doesn't support embedded videos.
    </video>
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
  .victory-screen,
  .victory-screen:before,
  .victory-screen__vid {
    position: fixed;
    top: 0;
    left: 0;
  }

  .victory-screen,
  .victory-screen:before {
    width: 100%;
    height: 100vh; 
  }

  .victory-screen {
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;

    &:before {
      content: "";
      z-index: 9;
      background-color: rgba(0,0,0,.5);
    }
  }

    .victory-screen__vid {
      z-index: 1;
      min-width: 100%;
      min-height: 100%;
    }

    .victory-screen__inner {
      position: relative;
      z-index: 12;
      max-width: ms(13);
      text-align: center;
    }

      .victory-screen__msg {
        margin-top: 0;
        margin-bottom: ms(-1);
        font-size: ms(3);
      }
</style>