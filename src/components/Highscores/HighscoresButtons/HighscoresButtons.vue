<template>
  <div class="highscores-buttons">

    <button type="button" class="btn" id="highscores-back-to-menu" v-on:click="showMenu">
      {{ $t("message.back") }}
    </button>
    &nbsp;
    <button type="button" class="btn btn--fail" id="highscores-delete-highscores"
      v-if="hasHighscores" v-on:click="deleteHighscores">
      {{ $t("message.delete") }}
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
