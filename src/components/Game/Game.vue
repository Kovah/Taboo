<template>

  <transition name="panel-active">
    <div id="game" class="panel" v-if="showGamePanel">

      <GameHeader/>
      <GameContent/>
      <GameButtons/>

    </div>
  </transition>

</template>

<script>
  import GameHeader from './GameHeader/GameHeader';
  import GameContent from './GameContent/GameContent';
  import GameButtons from './GameButtons/GameButtons';

  export default {
    name: 'Game',
    components: {
      GameHeader,
      GameContent,
      GameButtons
    },
    computed: {
      showGamePanel () {
        return this.$store.state.gameStarted;
      }
    }
  };
</script>
