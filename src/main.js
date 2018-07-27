// Imports
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import 'es6-promise/auto';

// Config
Vue.config.productionTip = false;
Vue.use(Vuex);

// Create the game store
const store = new Vuex.Store({
  state: {
    playerReady: false,
    categoryReady: true,
    gameReady: false,
    gameStarted: false,
    playerName: null,
    selectedCategory: 'animals'
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
    }
  }
});

// Start the app
new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
