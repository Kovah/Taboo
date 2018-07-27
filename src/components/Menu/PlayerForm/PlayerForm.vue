<template>
  <div class="player-form">
    <div class="form__group">
      <label for="player-name" class="player-form__label">Gib deinen Namen ein:</label>
      <input type="text" class="form__input player-form__input" id="player-name" name="player-name"
        @keyup="processInput">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PlayerForm',
    methods: {
      processInput (e) {
        if (e.target.value.length > 0) {
          this.$store.commit('playerReady', e.target.value);
        } else {
          this.$store.commit('playerNotReady');
        }
      }
    }
  };
</script>
