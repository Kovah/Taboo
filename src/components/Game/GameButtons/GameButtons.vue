<template>
  <div class="game-buttons">

    <button type="button" class="btn btn--lg btn--fail game-button" id="game-fail"
      ref="failBtn" v-on:click="markFail" v-bind:disabled="!gameStarted">
      <img src="@/assets/cross.svg" alt="&cross;">
    </button>

    <button type="button" class="btn btn--lg btn--success game-button" id="game-success"
      ref="successBtn" v-on:click="markSuccess" v-bind:disabled="!gameStarted">
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
  mounted () {
    this.$store.subscribe((mutation) => {
      if (mutation.type === 'startGame') {
        window.addEventListener('keydown', this.keyboardListener);
      }

      if (mutation.type === 'stopGame') {
        window.removeEventListener('keydown', this.keyboardListener);
      }
    });
  },
  methods: {
    markSuccess () {
      this.$store.commit('commitSuccess');
    },
    markFail () {
      this.$store.commit('commitFail');
    },
    pretendButtonClick (buttonReference) {
      this.$refs[buttonReference].classList.add('active');

      setTimeout(() => {
        this.$refs[buttonReference].classList.remove('active');
      }, 150);
    },
    keyboardListener (event) {
      if (event.key === 'ArrowLeft') {
        this.pretendButtonClick('failBtn');
        this.markFail();
      } else if (event.key === 'ArrowRight') {
        this.pretendButtonClick('successBtn');
        this.markSuccess();
      }
    }
  }
};
</script>
