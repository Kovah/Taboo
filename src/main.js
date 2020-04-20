// Imports
import Vue from 'vue';
import VueI18n from 'vue-i18n'
import store from './components/Store';
import App from './App.vue';
import 'es6-promise/auto';

// Config
Vue.config.productionTip = false;
Vue.use(VueI18n)


const messages = {
  de: {
    message: {
      title: 'KVH Tabu',
      subline:'Ein kleines, Tabu-ähnliches Spiel für den Browser',
      howto: 'So wird gespielt',
      howto1: 'Gib deinen Namen ein und wähle eine Kategorie.',
      howto2: 'Starte das Spiel.',
      howto3: 'Du hast {{ roundLength }} Sekunden, um deinen Freunden das angezeigte Wort zu erklären. Du darfst zur Erklärung nicht die Wörter aus dem roten Bereich nutzen!',
      howto4: 'Klicke auf den grünen Button, wenn deine Freunde das Wort erraten haben. Klicke Rot, wenn du das Wort überspringen möchtest.',
      howto5: 'Alle Ergebnisse werden in deinem Browser gespeichert.',
      player:'Gib deinen Namen ein:',
      menu:'Zurück zum Menü',
      highscore:'Highscores anzeigen',
      game:'Spiel zuende!',
      hasHighscores:'Keine Highscores vorhanden.',
      start:'Spiel Starten',
      showHighscores:'Highscores anzeigen',
      back:'Zurück zum Menü',
      delete:'Highscores löschen',
      stop:"Beenden",
      init:'Mach dich bereit'
    }
  },
  fr: {
    message: {
      title: 'KVH Taboo',
      subline:'Un petit jeu taboo sur navigateur',
      howto: 'Comment jouer',
      howto1: 'Entrez votre nom et choisissez une catégorie.',
      howto2: 'Démarrer le jeu.',
      howto3: 'Vous avez {roundLength} secondes pour expliquer le mot affiché à vos amis. Vous ne pouvez pas utiliser les mots de la zone rouge pour expliquer!',
      howto4: 'Cliquez sur le bouton vert lorsque vos amis ont deviné le mot. Cliquez sur rouge si vous voulez sauter le mot.',
      howto5: 'Tous les résultats sont enregistrés dans votre navigateur.',
      player:'Entrez votre nom:',
      menu:'Retour au menu',
      highscore:'Afficher les meilleurs scores',
      game:'Fin du jeu!',
      hasHighscores:'Aucun score disponible',
      start:'Démarrer ',
      showHighscores:'Afficher les meilleurs scores',
      back:'Retour au menu',
      delete:'Suppression des scores',
      stop:"Arrêter",
      init:'Prêt!'
    }
  }
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'fr', // navigator.language || navigator.userLanguage || 'fr', // set locale
  messages, // set locale messages
})
// Start the app
new Vue({
  store,
  render: h => h(App),
  i18n
}).$mount('#app');
