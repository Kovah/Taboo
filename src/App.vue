<template>

  <transition name="panel" mode="out-in" duration="400ms" v-on:before-leave="beforeLeave">
    <Game v-if="$store.state.activePanel === 'game'"/>
    <Highscores v-else-if="$store.state.activePanel === 'highscores'"/>
    <Menu v-else/>
  </transition>

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
  mounted () {
    this.$store.commit('initHighscores');
  },
  methods: {
    beforeLeave() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
};
</script>

<style type="text/css" lang="scss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Open+Sans:400,700&display=swap');
@import "@/styles/app.scss";
</style>
