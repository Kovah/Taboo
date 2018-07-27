<template>
  <div class="category-select">
    <Category v-for="(category, index) in categories" :key="category.id"
      :cat-id="category.id" :text="category.text" :color="colors[index]" :cat-index="index"/>
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
        categories: GameData.getCategories(),
        colors: GameData.getColors()
      };
    }
  };
</script>
