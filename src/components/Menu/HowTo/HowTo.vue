<template>
  <div class="how-to">
    <h3>{{ $t("message.howto") }}</h3>
    <ol>
      <li>{{ $t("message.howto1") }}</li>
      <li>{{ $t("message.howto2") }}</li>
      <li>{{ $t("message.howto3", {roundLength : roundLength}) }}
      </li>
      <li>{{ $t("message.howto4") }}
      </li>
      <li>{{ $t("message.howto5") }}</li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: 'HowTo',
    computed: {
      roundLength() {
        return this.$store.state.timerDefault
      }
    }
  };
</script>
