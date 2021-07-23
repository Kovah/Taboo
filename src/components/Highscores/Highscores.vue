<template>

  <div id="highscores" class="panel">
    <h2>{{ $t('highscores.title') }}</h2>

    <p v-if="!hasHighscores">{{ $t('highscores.empty') }}</p>

    <div class="table-wrapper highscores-table__wrapper">
      <table class="highscores-table" v-if="hasHighscores">
        <thead>
        <tr>
          <th>{{ $t('highscores.rank') }}</th>
          <th>{{ $t('game.player') }}</th>
          <th>{{ $t('game.category') }}</th>
          <th>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="20px"><path d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"/></svg>
          </th>
          <th>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height="20px"><path d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"/></svg>
          </th>
          <th>{{ $t('highscores.roundLength') }}</th>
          <th>{{ $t('highscores.date') }}</th>
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
