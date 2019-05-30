<script>
  import TabooData from 'taboo-data';

  export default {
    name: 'GameData',
    categories: TabooData.categories(),
    colors: [
      {id: 'blue', value: '#1e88e5'},
      {id: 'indigo', value: '#5e35b1'},
      {id: 'purple', value: '#8e24aa'},
      {id: 'pink', value: '#d81b60'},
      {id: 'red', value: '#e53935'},
      {id: 'orange', value: '#fb8c00'},
      {id: 'yellow', value: '#fdd835'},
      {id: 'green', value: '#43a047'},
      {id: 'teal', value: '#00acc1'},
      {id: 'cyan', value: '#039be5'}
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
