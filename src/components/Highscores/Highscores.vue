<template>

    <div id="highscores" class="panel">
      <div class="panel-content">
        <h1>Highscores</h1>

        <p v-if="!hasHighscores">Keine Highscores vorhanden.</p>

        <div class="table-wrapper highscores-table__wrapper">
          <table class="highscores-table" v-if="hasHighscores">
            <thead>
            <tr>
              <th>Rang</th>
              <th>Spieler</th>
              <th>Kategorie</th>
              <th><img src="@/assets/check-blk.svg" alt="&check;" width="16px"></th>
              <th><img src="@/assets/cross-blk.svg" alt="&cross;" width="16px"></th>
              <th>Datum</th>
            </tr>
            </thead>
            <tbody>
            <Highscore v-for="(highscore, index) in highscores" :key="index" :highscore="highscore"
              :highscoreIndex="index"/>
            </tbody>
          </table>
        </div>

        <HighscoresButtons :hasHighscores="hasHighscores"/>
      </div>

    </div>

</template>

<script>
  import Highscore from './Highscore/Highscore';
  import HighscoresButtons from './HighscoresButtons/HighscoresButtons';

  export default {
    name: 'Highscores',
    components: {
      Highscore,
      HighscoresButtons
    },
    computed: {
      hasHighscores () {
        return this.highscores.length > 0;
      },
      highscores: function () {
        return this.$store.state.highscores;
      }
    }
  };
</script>
