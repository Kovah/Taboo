<template>

  <transition name="panel-active">
    <div id="game" class="panel" v-if="showGamePanel">

      <h1>Game Panel</h1>

    </div>
  </transition>

</template>

<script>
  //import Logo from './Logo/Logo';

  export default {
    name: 'Game',
    components: {},
    computed: {
      showGamePanel () {
        if (this.$store.state.gameStarted) console.log('Game started');
        return this.$store.state.gameStarted;
      }
    }
  };
</script>
