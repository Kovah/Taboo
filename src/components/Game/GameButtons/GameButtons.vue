<template>
  <div class="game-buttons">
    <button type="button" class="btn btn--fail game-button" id="game-fail" v-on:click="markFail">
      <img src="@/assets/cross.svg" alt="&cross;">
    </button>
    <button type="button" class="btn btn--success game-button" id="game-success" v-on:click="markSuccess">
      <img src="@/assets/check.svg" alt="&check;">
    </button>
  </div>
</template>

<script>
  export default {
    name: 'GameButtons',
    methods: {
      markSuccess () {
        console.log('Card success');
      },
      markFail () {
        console.log('Card fail');
      }
    }
  };
</script>
