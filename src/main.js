// Imports
import Vue from 'vue';
import store from './components/Store';
import App from './App.vue';
import 'es6-promise/auto';
import VueI18n from 'vue-i18n';
import stringsDe from './lang/de.json';
import stringsEn from './lang/en.json';

// Config & plugins
Vue.use(VueI18n)
Vue.config.productionTip = false;

// Setup i18n
const messages = {
  en: stringsEn,
  de: stringsDe,
}

const i18n = new VueI18n({
  locale: 'de',
  fallbackLocale: 'en',
  messages,
})

// Start the app
new Vue({
  store,
  render: h => h(App),
  i18n
}).$mount('#app');
