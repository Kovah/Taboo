<template>
  <div class="menu-buttons">
    <button type="button" class="btn btn--lg" id="start-game" v-bind:disabled="startDisabled" v-on:click="startGame">
      Spiel Starten
    </button>
    <button type="button" class="btn btn--lg" id="show-highscores">
      Highscores anzeigen
    </button>
  </div>
</template>

<script>
  export default {
    name: 'MenuButtons',
    computed: {
      startDisabled () {
        if (this.$store.state.gameReady) console.log('Game ready');
        return !this.$store.state.gameReady;
      }
    },
    methods: {
      startGame () {
        let player = this.$store.state.playerName;
        let cat = this.$store.state.selectedCategory;
        this.$store.commit('startGame', true);
        console.log(`Game started as player '${player}' with category ${cat}`);
      }
    }
  };
</script>
