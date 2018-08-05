<template>
  <div class="highscores-buttons">

    <button type="button" class="btn" id="highscores-back-to-menu" v-on:click="showMenu">
      Zurück zum Menü
    </button>
    &nbsp;
    <button type="button" class="btn btn--fail" id="highscores-delete-highscores"
      v-if="hasHighscores" v-on:click="deleteHighscores">
      Highscores löschen
    </button>

  </div>
</template>

<script>
  export default {
    name: 'HighscoresButtons',
    props: ['hasHighscores'],
    methods: {
      deleteHighscores () {
        this.$store.commit('deleteHighscores');
      },
      showMenu () {
        this.$store.commit('showMenu');
      }
    }
  };
</script>
