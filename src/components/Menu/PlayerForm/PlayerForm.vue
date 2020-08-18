<template>
  <div class="player-form">
    <div class="form__group">
      <label for="player-name" class="player-form__label">Gib deinen Namen ein:</label>
      <input type="text" class="form__input player-form__input" id="player-name" name="player-name"
        maxlength="30" placeholder="Spieler 1" @keyup="processName">
    </div>
    <div class="form__group">
      <label for="turn-duration" class="player-form__label">Dauer der Runde:</label>
      <input type="number" class="form__input player-form__input" id="turn-duration" name="turn-duration"
        min="10" max="600" v-bind:value="this.$store.state.timerDefault" @keyup="processTurnDuration">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PlayerForm',
    methods: {
      processName (e) {
        if (e.target.value.length > 0) {
          this.$store.commit('playerReady', e.target.value);
        } else {
          this.$store.commit('playerNotReady');
        }
      },
      processTurnDuration (e) {
        if (e.target.value.length > 0) {
          this.$store.commit('turnDuration', e.target.value);
        } else {
          this.$store.commit('turnNotSet');
        }
      }
    }
  };
</script>
