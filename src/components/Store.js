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
    gameInitText: 'Get ready!',

    // General game data
    playerName: '',
    selectedCategory: 'animals',
    availableCards: {},

    // Menu states
    playerReady: false,
    categoryReady: true,
    gameReady: false,

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
      state.gameReady = state.categoryReady;
    },
    playerNotReady (state) {
      state.gameReady = state.playerReady = false;
    },
    categoryReady (state) {
      state.gameReady = state.playerReady;
    },
    categoryNotReady (state) {
      state.gameReady = state.categoryReady = false;
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

      let key = keys[keys.length * Math.random() << 0];
      let result = state.availableCards[key];
      delete state.availableCards[key];

      // Parse words
      let split = result.split('|');

      let computedResult = {};
      computedResult.word = split[0];

      if (typeof split[1] !== 'undefined') {
        computedResult.buzzwords = split[1].split(':');
      } else {
        computedResult.buzzwords = [];
      }

      state.keyword = computedResult.word;
      state.buzzwords = computedResult.buzzwords;
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
    },

    // Global actions
    showMenu (state) {
      state.gameStarted = false;
      state.showGamePanel = false;
      state.showHighscorePanel = false;

      this.commit('resetGameState');
    },
    showHighscores (state) {
      state.gameStarted = false;
      state.showGamePanel = false;
      state.showHighscorePanel = true;

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
