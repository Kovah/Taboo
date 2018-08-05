<template>

  <div class="menu__wrapper">
    <div id="menu" v-bind:style="{overflow: showGamePanel || showHighscorePanel ? 'hidden' : ''}">
      <div class="container">

        <Logo/>
        <HowTo/>
        <PlayerForm/>
        <CategorySelect/>
        <MenuButtons/>

      </div>
    </div>
  </div>

</template>

<script>
  import Logo from './Logo/Logo';
  import HowTo from './HowTo/HowTo';
  import PlayerForm from './PlayerForm/PlayerForm';
  import CategorySelect from './CategorySelect/CategorySelect';
  import MenuButtons from './MenuButtons/MenuButtons';

  export default {
    name: 'Menu',
    components: {
      Logo,
      HowTo,
      PlayerForm,
      CategorySelect,
      MenuButtons
    },
    computed: {
      showHighscorePanel () {
        return this.$store.state.showHighscorePanel;
      },
      showGamePanel () {
        return this.$store.state.showGamePanel;
      }
    }
  };
</script>
