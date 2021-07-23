// Imports
import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import store from './components/Store';
import App from './App.vue';
import stringsDe from './lang/de.json';
import stringsEn from './lang/en.json';

// Setup i18n
const messages = {
  en: stringsEn,
  de: stringsDe
};
const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages
});

// Start the app
const app = createApp(App);
app.use(store);
app.use(i18n);
app.mount('#app');
