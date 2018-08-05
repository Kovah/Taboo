<template>

  <div class="menu__wrapper">
    <div id="menu" v-bind:style="{overflow: showGamePanel || showHighscorePanel ? 'hidden' : ''}">
      <div class="container">

        <Logo/>
        <HowTo/>
        <PlayerForm/>
        <CategorySelect/>
        <MenuButtons/>
        <MenuFooter/>

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
  import MenuFooter from './MenuFooter/MenuFooter';

  export default {
    name: 'Menu',
    components: {
      Logo,
      HowTo,
      PlayerForm,
      CategorySelect,
      MenuButtons,
      MenuFooter
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
