<script>
  export default {
    name: 'GameData',
    getCategories () {
      return [
        {id: 'animals', text: 'Tiere'},
        {id: 'cars', text: 'Fahrzeuge'},
        {id: 'city-country', text: 'Städte & Länder'},
        {id: 'food', text: 'Essen & Trinken'},
        {id: 'literature', text: 'Literatur'},
        {id: 'people', text: 'Berühmte Personen'},
        {id: 'sports', text: 'Sport'},
        {id: 'things', text: 'Dinge & Geräte'},
        {id: 'tv', text: 'Filme, Serien & TV'},
        {id: 'web', text: 'Das Internet'}
      ];
    },
    getColors () {
      return [
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
      ];
    }
  };
</script>
