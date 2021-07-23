<template>

  <div id="menu" class="panel">

    <LangSwitch/>
    <Logo/>
    <div class="menu__form">
      <PlayerForm/>
      <HowTo/>
    </div>
    <CategorySelect/>
    <MenuButtons/>
    <MenuFooter/>

  </div>

</template>

<script>
import Logo from './Logo/Logo';
import HowTo from './HowTo/HowTo';
import PlayerForm from './PlayerForm/PlayerForm';
import CategorySelect from './CategorySelect/CategorySelect';
import MenuButtons from './MenuButtons/MenuButtons';
import MenuFooter from './MenuFooter/MenuFooter';
import LangSwitch from './LangSwitch/LangSwitch';

export default {
  name: 'Menu',
  components: {
    LangSwitch,
    Logo,
    HowTo,
    PlayerForm,
    CategorySelect,
    MenuButtons,
    MenuFooter
  }
};
</script>
