<template>
  <div class="game-header">

    <div class="game-header__timer">
      <div class="game-header__timer-left">{{ computedGameTimer }}</div>
      <div class="game-header__timer-progress" v-bind:style="{width: gameProgress + '%'}"></div>
    </div>

    <div class="game-header__score">
      <span class="game-header__score--success">{{ scoreSuccess }}</span>
      <span>:</span>
      <span class="game-header__score--fail">{{ scoreFail }}</span>
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
          this.$store.commit('setNewKeyword');
          this.startGame();
          clearInterval(this.gameCountdownInterval);
        }
      }, 1000);
    },
    computed: {
      computedGameTimer () {
        return this.gameTimer > 0 ? this.gameTimer : '';
      },
      gameProgress () {
        return this.gameTimer / this.$store.state.timerDefault * 100
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
        console.log('Game Timer started');

        this.gameTimer = this.$store.state.timerDefault;

        this.gameTimerInterval = window.setInterval(() => {
          this.gameTimer--;

          if (this.gameTimer === 0) {
            // stop the game if the game timer reaches zero
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
