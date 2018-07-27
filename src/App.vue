<template>

  <div id="app">
    <div id="menu" class="panel">
      <Menu/>
    </div>
    <div id="game" class="panel">

    </div>
    <div id="results" class="panel">

    </div>
    <div id="highscores" class="panel">

    </div>
  </div>

</template>

<script>
  import GameEngine from './components/GameEngine';
  import Menu from './components/Menu/Menu';

  export default {
    name: 'app',
    components: {
      GameEngine,
      Menu
    }
  };
</script>

<style type="text/css" lang="scss">
  @import "@/styles/app.scss";
</style>
