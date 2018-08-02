// Imports
import Vue from 'vue';
import store from './components/Store';
import App from './App.vue';
import 'es6-promise/auto';

// Config
Vue.config.productionTip = false;

// Start the app
new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
