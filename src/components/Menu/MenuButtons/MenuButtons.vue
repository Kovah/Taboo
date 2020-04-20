<template>
  <div class="menu-buttons">
    <button type="button" class="btn btn--lg" id="start-game" v-bind:disabled="startDisabled" v-on:click="startGame">
      {{ $t("message.start") }}
    </button>
    <button type="button" class="btn btn--lg" id="show-highscores" v-on:click="showHighscores">
      {{ $t("message.showHighscores") }}
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
        this.$store.commit('startCountdown');
      },
      showHighscores () {
        this.$store.commit('showHighscores');
      }
    }
  };
</script>
