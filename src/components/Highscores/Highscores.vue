<template>

  <transition name="panel-active">
    <div id="highscores" class="panel" v-if="showHighscorePanel">

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
          </tr>
          </thead>
          <tbody>
          <Highscore v-for="(highscore, index) in highscores" :key="index" :highscore="highscore" :highscoreIndex="index"/>
          </tbody>
        </table>
      </div>

      <HighscoresButtons/>

    </div>
  </transition>

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
      showHighscorePanel () {
        return this.$store.state.showHighscorePanel;
      },
      hasHighscores () {
        return this.highscores.length > 0;
      },
      highscores: function () {
        let highscores = this.$store.state.highscores;

        if (highscores.length === 0) {
          // Try to get the highscores from local storage
          let localScores = JSON.parse(localStorage.getItem('highscores'));
          if (localScores != null) {
            console.log('Old highscores loaded');
            highscores = localScores;
          }
        }

        // Sort the highscores by total score descending
        highscores = highscores.sort((a, b) => {
          // Calculate a total score by substrating the fail from the success cards
          let totalScoreA = a.score.success - a.score.fail;
          let totalScoreB = b.score.success - b.score.fail;

          if (totalScoreA < totalScoreB)
            return 1;
          if (totalScoreA > totalScoreB)
            return -1;
          return 0;
        });

        return highscores;
      }
    }
  };
</script>
