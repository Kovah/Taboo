<template>

  <div id="menu">
    <div class="container">

      <Logo/>
      <HowTo/>
      <PlayerForm/>
      <CategorySelect/>
      <MenuButtons/>

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
    }
  };
</script>
