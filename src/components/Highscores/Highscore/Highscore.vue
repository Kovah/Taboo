<template>
  <tr class="highscore">
    <td class="highscore__index">{{ highscoreIndex + 1 }}</td>
    <td class="highscore__name">{{ highscore.name }}</td>
    <td class="highscore__category">{{ highscore.category }}</td>
    <td class="highscore__score-success">{{ highscore.score.success }}</td>
    <td class="highscore__score-fail">{{ highscore.score.fail }}</td>
  </tr>
</template>

<script>
  export default {
    name: 'Highscore',
    props: ['highscore', 'highscoreIndex']
  };
</script>
