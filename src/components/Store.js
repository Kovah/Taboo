import Vue from 'vue';
import Vuex from 'vuex';
import GameData from './GameData';

Vue.use(Vuex);

// Create the game store
const store = new Vuex.Store({
  state: {
    // Defaults
    timerDefault: 60,
    countdownDefault: 4,
    gameInitText: 'Mach dich bereit!',

    // General game data
    playerName: 'Spieler 1',
    selectedCategory: 'animals',
    availableCards: {},

    // App states
    showGamePanel: false,
    showHighscorePanel: false,
    gameCountdown: false,
    gameStarted: false,

    // Game data
    keyword: '',
    buzzwords: [],
    score: {
      success: 0,
      fail: 0
    },
    highscores: []
  },
  mutations: {
    // Menu mutations
    playerReady (state, playername) {
      state.playerName = playername;
    },
    playerNotReady (state) {
      state.playerName = "Spieler 1"
    },
    selectCategory (state, newCategory) {
      state.selectedCategory = newCategory;

      console.log('Category changed to ' + newCategory);
    },

    // Start the game countdown
    startCountdown (state) {
      state.showGamePanel = true;
      state.gameCountdown = true;
      state.keyword = state.gameInitText;
      state.availableCards = GameData.getCardsForCategory(state.selectedCategory);

      console.log('Game started by player ' + state.playerName + ' with category ' + state.selectedCategory);
    },

    // Start or stop the game
    startGame (state) {
      state.gameStarted = true;
      state.gameCountdown = false;
      this.commit('setNewKeyword');

      console.log('Game started');
    },
    stopGame (state) {
      state.gameStarted = false;
      this.commit('saveHighscore');

      console.log('Game stopped by player');
    },

    // In-game mutations
    commitSuccess (state) {
      state.score.success++;
      this.commit('setNewKeyword');
    },
    commitFail (state) {
      state.score.fail++;
      this.commit('setNewKeyword');
    },
    setNewKeyword (state) {
      // Pick random property
      let keys = Object.keys(state.availableCards);

      if (typeof keys === 'undefined') {
        // Stop the game if there are no cards left
        this.commit('stopGame');
        return;
      }

      const keyword = keys[keys.length * Math.random() << 0];
      const buzzwords = state.availableCards[keyword];
      delete state.availableCards[keyword];

      state.keyword = keyword;
      state.buzzwords = buzzwords;
    },

    // End-game mutations
    resetGameState (state) {
      state.availableCards = [];
      state.keyword = '';
      state.buzzwords = [];
      state.score = {
        success: 0,
        fail: 0
      };
    },

    // Global actions
    showMenu (state) {
      state.gameStarted = false;
      state.showGamePanel = false;
      state.showHighscorePanel = false;

      this.commit('resetGameState');
    },

    // Highscore actions
    initHighscores(state) {
      if (state.highscores.length === 0) {
        // Try to get the highscores from local storage
        let localScores = JSON.parse(localStorage.getItem('highscores'));
        if (localScores != null) {
          console.log('Old highscores loaded');
          state.highscores = localScores;
        }
      }

      this.commit('sortHighscores');
    },
    sortHighscores(state) {
      // Sort the highscores by total score descending
      state.highscores = state.highscores.sort((a, b) => {
        // Calculate a total score by substrating the fail from the success cards
        let totalScoreA = a.score.success - a.score.fail;
        let totalScoreB = b.score.success - b.score.fail;

        if (totalScoreA < totalScoreB)
          return 1;
        if (totalScoreA > totalScoreB)
          return -1;
        return 0;
      });
    },
    saveHighscore (state) {
      let highscore = {
        name: state.playerName,
        score: state.score,
        category: state.selectedCategory,
        date: Date.now()
      };

      state.highscores.push(highscore);

      if (typeof(Storage) !== 'undefined') {
        // Save the highscore to the local storage is available
        localStorage.setItem('highscores', JSON.stringify(state.highscores));
      }

      this.commit('sortHighscores');
    },
    showHighscores (state, afterGamePanel) {
      state.gameStarted = false;
      state.showGamePanel = false;

      if (afterGamePanel) {
        // Delay the animation of the highscores panel if coming from the game panel
        window.setTimeout(()=>{
          state.showHighscorePanel = true;
        }, 300);
      } else {
        state.showHighscorePanel = true;
      }

      this.commit('resetGameState');
    },
    deleteHighscores (state) {
      if (!confirm('Highscores löschen?')) {
        return;
      }

      state.highscores = [];

      if (typeof(Storage) !== 'undefined') {
        localStorage.removeItem('highscores');
      }
    }
  }
});

export default store;
