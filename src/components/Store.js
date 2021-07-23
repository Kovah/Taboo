import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";
import GameData from './GameData';

// Create the game store
const store = createStore({
  plugins: [createPersistedState()],
  state: {
    // Defaults
    roundLength: 60,
    countdownDefault: 4,
    locale: 'en',

    // General game data
    playerName: '',
    selectedCategory: 'animals',
    availableCards: {},

    // App states
    activePanel: 'menu',
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
    setPlayerName (state, playername) {
      state.playerName = playername;
    },
    turnDuration (state, turnDuration) {
      state.roundLength = turnDuration;
    },
    turnNotSet (state) {
      state.roundLength = 60;
    },
    selectCategory (state, newCategory) {
      state.selectedCategory = newCategory;

      console.log('Category changed to ' + newCategory);
    },
    switchLocale (state, payload) {
      payload.vm.$i18n.locale = payload.locale;
      state.locale = payload.locale;
      document.documentElement.setAttribute('lang', payload.locale);
    },

    // Start the game countdown
    async startCountdown (state, i18n) {
      state.activePanel = 'game';
      state.gameCountdown = true;
      state.keyword = i18n.t('game.init');
      state.availableCards = await GameData.getCardsForCategory(state.selectedCategory, i18n.locale);

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
      state.activePanel = 'menu';

      this.commit('resetGameState');
    },

    // Highscore actions
    sortHighscores (state) {
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
        date: Date.now(),
        roundLength: state.roundLength
      };

      state.highscores.push(highscore);

      this.commit('sortHighscores');
    },
    showHighscores (state) {
      state.gameStarted = false;
      state.activePanel = 'highscores';

      this.commit('resetGameState');
    },
    deleteHighscores (state) {
      if (!confirm('Highscores löschen?')) {
        return;
      }

      state.highscores = [];
    }
  }
});

export default store;
