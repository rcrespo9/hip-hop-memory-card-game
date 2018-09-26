<template>
  <div class="victory-screen">
    <div class="victory-screen__inner">
      <p>You did it! You won the game in {{finalTime}} with a {{successRate}} success rate!</p>
      <button @click="startNewGame">Start New Game</button>
      <button @click="closeScreen">Exit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MemoryCardGameVictoryScreen',
  props: {
    finalTime: String,
    successRate: String,
    startNewGame: Function,
    closeScreen: Function
  }
}
</script>

<style scoped>
  .victory-screen {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-image: url('https://media.giphy.com/media/9D5gC0ryykq6hx8Xri/giphy.gif');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
</style>