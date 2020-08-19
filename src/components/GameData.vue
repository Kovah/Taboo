<script>
  import TabooData from 'taboo-data';

  export default {
    name: 'GameData',
    categories: TabooData.categories(),
    colors: [
      {id: 'blue'},
      {id: 'indigo'},
      {id: 'pink'},
      {id: 'red'},
      {id: 'orange'},
      {id: 'green'},
      {id: 'teal'},
      {id: 'cyan'},
    ],
    getCategories () {
      return this.categories.de;
    },
    getCardsForCategory (category) {
      return TabooData.getCategory(category);
    },
    getColors () {
      return this.colors;
    }
  };
</script>
