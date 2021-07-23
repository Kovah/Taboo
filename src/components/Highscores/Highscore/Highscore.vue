<template>
  <tr class="highscore">
    <td class="highscore__index">{{ highscoreIndex + 1 }}</td>
    <td class="highscore__name">{{ highscore.name }}</td>
    <td class="highscore__category">{{ categoryName(highscore.category) }}</td>
    <td class="highscore__score-success">{{ highscore.score.success }}</td>
    <td class="highscore__score-fail">{{ highscore.score.fail }}</td>
    <td class="highscore__date">{{ highscoreDate }}</td>
  </tr>
</template>

<script>
import GameData from '../../GameData';

export default {
  name: 'Highscore',
  props: ['highscore', 'highscoreIndex'],
  computed: {
    highscoreDate () {
      const date = new Date(this.highscore.date);
      const locale = (this.$i18n.locale === 'de' ? 'de-DE' : 'en-US');
      return date.toLocaleString(locale);
    }
  },
  methods: {
    categoryName (category) {
      return GameData.getCategories(this.$i18n.locale)[category].text;
    }
  }
};
</script>
