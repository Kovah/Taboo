<template>
  <div class="language-switch">
    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang.toUpperCase() }}</option>
    </select>
  </div>
</template>

<script>
  export default {
    name: 'LangSwitch',
    data () {
      return { langs: ['de', 'en'] }
    }
  };
</script>
