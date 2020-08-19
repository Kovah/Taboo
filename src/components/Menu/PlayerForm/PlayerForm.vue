<template>
  <div class="player-form">
    <div class="form__group">
      <label for="player-name" class="player-form__label">{{ $t('game.playerName') }}</label>
      <input type="text" class="form__input player-form__input" id="player-name" name="player-name"
        maxlength="30" v-bind:placeholder="$t('game.playerDefault')" @keyup="processName">
    </div>
    <div class="form__group">
      <label for="turn-duration" class="player-form__label">{{ $t('game.roundDuration') }}</label>
      <input type="number" class="form__input player-form__input" id="turn-duration" name="turn-duration"
        min="10" max="600" v-bind:value="this.$store.state.timerDefault" @keyup="processTurnDuration">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PlayerForm',
    created () {
      this.$store.commit('setPlayerName', this.$i18n.t('game.playerDefault'));
    },
    methods: {
      processName (e) {
        if (e.target.value.length > 0) {
          this.$store.commit('setPlayerName', e.target.value);
        } else {
          this.$store.commit('setPlayerName', this.$i18n.t('game.playerDefault'));
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
