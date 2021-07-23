<template>
  <div class="menu-buttons">
    <button type="button" class="btn btn--lg" id="start-game" v-on:click="startGame">
      {{ $t('game.start') }}
    </button>
    <button type="button" class="btn btn--lg" id="show-highscores" v-on:click="showHighscores">
      {{ $t('highscores.show') }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'MenuButtons',
  methods: {
    startGame () {
      this.$store.commit('startCountdown', this.$i18n);
    },
    showHighscores () {
      this.$store.commit('showHighscores');
    }
  }
};
</script>
