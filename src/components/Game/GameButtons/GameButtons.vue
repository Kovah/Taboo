<template>
  <div class="game-buttons">

    <button type="button" class="btn btn--lg btn--fail game-button" id="game-fail"
      ref="failBtn" v-on:click="markFail" v-bind:disabled="!gameStarted">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#fff" d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"/></svg>
    </button>

    <button type="button" class="btn btn--lg btn--success game-button" id="game-success"
      ref="successBtn" v-on:click="markSuccess" v-bind:disabled="!gameStarted">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#fff" d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"/></svg>
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
