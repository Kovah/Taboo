<template>
  <div class="player-form">
    <div class="form__group">
      <label for="player-name" class="player-form__label">{{ $t('game.playerName') }}</label>
      <input type="text" class="form__input player-form__input" id="player-name" name="player-name"
        maxlength="30" v-bind:placeholder="$t('game.playerDefault')" v-bind:value="lastPlayerName" @keyup="processName">
    </div>
    <div class="form__group">
      <label for="turn-duration" class="player-form__label">{{ $t('game.roundDuration') }}</label>
      <input type="number" class="form__input player-form__input" id="turn-duration" name="turn-duration"
        min="10" max="600" v-bind:value="this.$store.state.roundLength" @keyup="processTurnDuration">
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlayerForm',
  computed: {
    lastPlayerName () {
      return this.$store.state.playerName;
    }
  },
  methods: {
    processName (e) {
      this.$store.commit('setPlayerName', e.target.value);
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
