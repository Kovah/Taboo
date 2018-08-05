<template>
  <div class="how-to">
    <h3>So wird gespielt</h3>
    <ol>
      <li>Gib deinen Namen ein und wähle eine Kategorie.</li>
      <li>Starte das Spiel.</li>
      <li>Du hast {{ roundLength }} Sekunden, um deinen Freunden das angezeigte Wort zu erklären. Du darfst zur Erklärung nicht die
        Wörter aus dem roten Bereich nutzen!
      </li>
      <li>Klicke auf den grünen Button, wenn deine Freunde das Wort erraten haben. Klicke Rot, wenn du das Wort
        überspringen möchtest.
      </li>
      <li>Alle Ergebnisse werden in deinem Browser gespeichert.</li>
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
