<template>
  <div class="game-buttons">

    <button type="button" class="btn btn--fail game-button" id="game-fail"
      v-on:click="markFail" v-bind:disabled="!gameStarted">
      <img src="@/assets/cross.svg" alt="&cross;">
    </button>

    <button type="button" class="btn btn--success game-button" id="game-success"
      v-on:click="markSuccess" v-bind:disabled="!gameStarted">
      <img src="@/assets/check.svg" alt="&check;">
    </button>

  </div>
</template>

<script>
  export default {
    name: 'GameButtons',
    computed: {
      gameStarted () {
        return this.$store.state.gameStarted;
      }
    },
    methods: {
      markSuccess () {
        this.$store.commit('commitSuccess');
      },
      markFail () {
        this.$store.commit('commitFail');
      }
    }
  };
</script>
