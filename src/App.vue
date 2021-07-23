<template>

  <div id="app">
    <transition name="panel" mode="out-in" duration="400ms">
      <div>
        <Menu v-if="$store.state.showMenuPanel"/>
        <Game v-if="$store.state.showGamePanel"/>
        <Highscores v-if="$store.state.showHighscorePanel"/>
      </div>
    </transition>
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
