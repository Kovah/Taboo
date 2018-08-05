<template>

  <div id="app">
    <Menu/>
    <Game/>
    <Highscores/>
  </div>

</template>

<script>
  import Menu from './components/Menu/Menu';
  import Game from './components/Game/Game';
  import Highscores from './components/Highscores/Highscores';

  export default {
    name: 'app',
    components: {
      Menu,
      Game,
      Highscores
    },
    mounted() {
      this.$store.commit('initHighscores');
    }
  };
</script>

<style type="text/css" lang="scss">
  @import "@/styles/app.scss";
</style>
