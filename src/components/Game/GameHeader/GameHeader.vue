<template>
  <div class="game-header">

    <div class="game-header__timer">
      <div v-bind:class="'game-header__timer-left ' + timerClass">{{ computedGameTimer }}</div>
      <div v-bind:class="'game-header__timer-progress ' + progressClass"
        v-bind:style="{width: gameProgress + '%'}"></div>
    </div>

    <div class="game-header__score">
      <span class="game-header__score--fail">{{ scoreFail }}</span>
      <span>&nbsp;:&nbsp;</span>
      <span class="game-header__score--success">{{ scoreSuccess }}</span>
    </div>

    <button type="button" class="btn game-header__stop-btn" id="game-stop"
      v-bind:disabled="!gameStarted" v-on:click="stopGame">
      <img src="@/assets/cross.svg" alt="X"> Beenden
    </button>
  </div>
</template>

<script>
  export default {
    name: 'GameHeader',
    data () {
      return {
        gameCountdownInterval: null,
        gameCountdown: 0,
        gameTimerInterval: null,
        gameTimer: 0
      };
    },
    mounted () {
      // Initialize the game countdown and start it
      console.log('Countdown started');
      this.gameCountdown = this.$store.state.countdownDefault;

      this.gameCountdownInterval = window.setInterval(() => {
        this.gameCountdown--;
        this.$store.state.keyword = this.gameCountdown;

        if (this.gameCountdown === 0) {
          // Let the game set a new keyword and start the actual game if countdown reaches zero
          this.startGame();
          clearInterval(this.gameCountdownInterval);
        }
      }, 1000);
    },
    computed: {
      timerClass () {
        return this.gameTimer < 11 && this.gameTimer > 0 ? 'game-header__timer-left--crit' : '';
      },
      computedGameTimer () {
        return this.gameTimer > 0 ? this.gameTimer : '';
      },
      gameProgress () {
        return this.gameTimer / this.$store.state.timerDefault * 100;
      },
      progressClass () {
        return this.gameTimer < 11 ? 'game-header__timer-progress--crit' : '';
      },
      scoreSuccess () {
        return this.$store.state.score.success;
      },
      scoreFail () {
        return this.$store.state.score.fail;
      },
      gameStarted () {
        return this.$store.state.gameStarted;
      }
    },
    methods: {
      startGame () {
        this.$store.commit('startGame');

        this.gameTimer = this.$store.state.timerDefault;

        this.gameTimerInterval = window.setInterval(() => {
          this.gameTimer--;

          if (this.gameTimer === 0) {
            // Stop the game if the game timer reaches zero
            this.stopGame();
            clearInterval(this.gameTimerInterval);
          }
        }, 1000);
      },
      stopGame () {
        clearInterval(this.gameCountdownInterval);
        clearInterval(this.gameTimerInterval);

        this.$store.commit('stopGame');
      }
    }
  };
</script>
