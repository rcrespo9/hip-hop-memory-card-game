<template>
  <div class="victory-screen">
    <video class="victory-screen__vid" autoplay loop muted poster="@/assets/flava-flav-vid-poster.jpg" src="@/assets/flava-flav.mp4">
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
    padding: 0 $global-gutter;

    &:before {
      content: "";
      z-index: 9;
      background-color: rgba($real-black, .4);
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
        margin-bottom: ms(-2);
        font-size: ms(2);
        text-shadow: 0 1px 0 rgba($real-black, .75);

        @include media-query($xsm-screen) {
          font-size: ms(3);
        }
      }
</style>