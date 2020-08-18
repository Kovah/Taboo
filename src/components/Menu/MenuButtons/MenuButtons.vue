<template>
  <div class="menu-buttons">
    <button type="button" class="btn btn--lg" id="start-game" v-on:click="startGame">
      Spiel Starten
    </button>
    <button type="button" class="btn btn--lg" id="show-highscores" v-on:click="showHighscores">
      Highscores anzeigen
    </button>
  </div>
</template>

<script>
  export default {
    name: 'MenuButtons',
    methods: {
      startGame () {
        this.$store.commit('startCountdown');
      },
      showHighscores () {
        this.$store.commit('showHighscores');
      }
    }
  };
</script>
