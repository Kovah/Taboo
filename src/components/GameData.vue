<script>
  let cat_animals = require('../../node_modules/taboo-data/src/data/de/animals.json');
  let cat_cars = require('../../node_modules/taboo-data/src/data/de/cars.json');
  let cat_cityCountry = require('../../node_modules/taboo-data/src/data/de/city-country.json');
  let cat_food = require('../../node_modules/taboo-data/src/data/de/food.json');
  let cat_literature = require('../../node_modules/taboo-data/src/data/de/literature.json');
  let cat_people = require('../../node_modules/taboo-data/src/data/de/people.json');
  let cat_sports = require('../../node_modules/taboo-data/src/data/de/sports.json');
  let cat_things = require('../../node_modules/taboo-data/src/data/de/things.json');
  let cat_tv = require('../../node_modules/taboo-data/src/data/de/tv.json');
  let cat_web = require('../../node_modules/taboo-data/src/data/de/web.json');

  export default {
    name: 'GameData',
    categories: {
      animals: {text: 'Tiere', data: cat_animals},
      cars: {text: 'Fahrzeuge', data: cat_cars},
      cityCountry: {text: 'Städte & Länder', data: cat_cityCountry},
      food: {text: 'Essen & Trinken', data: cat_food},
      literature: {text: 'Literatur', data: cat_literature},
      people: {text: 'Berühmte Personen', data: cat_people},
      sports: {text: 'Sport', data: cat_sports},
      things: {text: 'Dinge & Geräte', data: cat_things},
      tv: {text: 'Filme, Serien & TV', data: cat_tv},
      web: {text: 'Das Internet', data: cat_web}
    },
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
      return this.categories;
    },
    getCardsForCategory (category) {
      if (!this.categories[category]) {
        return;
      }
      return this.categories[category].data;
    },
    getColors () {
      return this.colors;
    }
  };
</script>
