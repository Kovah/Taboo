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
        let date = new Date(this.highscore.date);
        return date.toLocaleString('de-DE');
      }
    },
    methods: {
      categoryName (category) {
        return GameData.getCategories()[category].text;
      }
    }
  };
</script>
