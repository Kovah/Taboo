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
    getCategories (locale) {
      return this.categories[locale];
    },
    async getCardsForCategory (category, locale) {
      return await TabooData.getCategory(category, locale);
    },
    getColors () {
      return this.colors;
    }
  };
</script>
