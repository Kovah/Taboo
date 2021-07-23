<template>
  <div class="how-to">
    <h3>{{ $t('howto.title') }}</h3>
    <ol>
      <li>{{ $t('howto.instruction[0]') }}</li>
      <li>{{ $t('howto.instruction[1]') }}</li>
      <li>{{ $t('howto.instruction[2]', {roundLength: roundLength}) }}</li>
      <li>{{ $t('howto.instruction[3]') }}</li>
      <li>{{ $t('howto.instruction[4]') }}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'HowTo',
  computed: {
    roundLength () {
      return this.$store.state.timerDefault;
    }
  }
};
</script>
