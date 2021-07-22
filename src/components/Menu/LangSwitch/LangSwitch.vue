<template>
  <div class="language-switch">
    <select v-bind:value="$i18n.locale" v-on:input="changeLocale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang.toUpperCase() }}</option>
    </select>
  </div>
</template>

<script>
  export default {
    name: 'LangSwitch',
    data () {
      return { langs: ['de', 'en'] }
    },
    methods: {
      changeLocale(event) {
        this.$store.commit('switchLocale', { vm: this, locale: event.target.value })
      }
    }
  };
</script>
