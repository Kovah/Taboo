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
  @import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Open+Sans:400,700&display=swap');
  @import "@/styles/app.scss";
</style>
