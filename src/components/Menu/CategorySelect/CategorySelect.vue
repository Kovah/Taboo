<template>
  <div class="category-select">
    <Category v-for="(category, key, index) in categories" :key="key"
      :cat-id="key" :text="category.text" :color="colors[index]" :cat-index="index"/>
  </div>
</template>

<script>
  import GameData from '../../GameData';
  import Category from './Category';

  export default {
    name: 'CategorySelect',
    components: {
      GameData,
      Category
    },
    data () {
      return {
        categories: GameData.getCategories()
      };
    },
    computed: {
      colors () {
        const colors = GameData.getColors()
        return colors.concat(colors)
      }
    }
  };
</script>
