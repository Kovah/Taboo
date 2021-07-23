<template>
  <div class="category-select">
    <Category v-for="(category, key, index) in categories" :key="key"
      :cat-id="key" :text="category.text" :color="colors[index]" :cat-index="index"/>
  </div>
</template>

<script>
  import Category from './Category';
  import GameData from '@/components/GameData';

  export default {
    name: 'CategorySelect',
    components: {
      Category
    },
    computed: {
      categories () {
        return GameData.getCategories(this.$store.state.locale);
      },
      colors () {
        const colors = GameData.getColors()
        return colors.concat(colors)
      }
    }
  };
</script>
