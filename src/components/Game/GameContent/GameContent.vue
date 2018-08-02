<template>
  <div class="game-content">
    <div class="game-content__keyword">
      <h1>{{ getKeyword }}</h1>
    </div>
    <div class="game-content__buzzwords" v-if="displayBuzzwords">
      <div class="game-content__buzzword" v-for="buzzword in getBuzzwords">{{ buzzword }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GameContent',
    computed: {
      getKeyword () {
        return this.$store.state.keyword;
      },
      getBuzzwords () {
        return this.$store.state.buzzwords;
      },
      displayBuzzwords() {
        return this.$store.state.buzzwords.length > 0;
      }
    }
  };
</script>
