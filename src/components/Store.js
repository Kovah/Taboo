import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// Create the game store
const store = new Vuex.Store({
  state: {
    playerReady: false,
    categoryReady: true,
    gameReady: false,
    gameStarted: false,
    playerName: '',
    selectedCategory: 'animals',
    timerDefault: 60,
    countdownDefault: 4,
    gameInitText: 'Get ready!',
    keyword: '',
    buzzwords: [],
    score: {
      success: 0,
      fail: 0,
    }
  },
  mutations: {
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
    startGame (state, start) {
      state.gameStarted = start;
      state.keyword = state.gameInitText;
      console.log('Game started by player ' +  state.playerName);
    },
    stopGame (state) {
      // @TODO Find solution to stop game without hiding the game panel
      // state.gameStarted = false;
      console.log('Game stopped by player');
    },
    setNewKeyword (state) {
      // @TODO Get keyword and buzzwords randomly from current category json file
      state.keyword = 'new Keyword';
      state.buzzwords = ['buzzword 1', 'buzzword 2', 'buzzword 3'];
    }
  }
});

export default store;
