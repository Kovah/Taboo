<template>

  <div id="app">
    <Menu/>
    <Game/>
  </div>

</template>

<script>
  import GameEngine from './components/GameEngine';
  import Menu from './components/Menu/Menu';
  import Game from './components/Game/Game';

  export default {
    name: 'app',
    components: {
      GameEngine,
      Menu,
      Game
    }
  };
</script>

<style type="text/css" lang="scss">
  @import "@/styles/app.scss";
</style>
