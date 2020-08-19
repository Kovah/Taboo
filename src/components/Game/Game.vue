<template>

    <div id="game" class="panel">
      <div class="panel-content">

        <div class="game-panel">
          <GameHeader/>
          <GameContent/>
          <GameButtons/>
        </div>

      </div>
    </div>

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
    }
  };
</script>
