<template>
  <div v-bind:class="'category-select__category'">
    <input type="radio" name="category" class="category-select__input"
      :id="'cat-' + catId" v-bind:checked="catIndex === 0 ? 'checked' : ''">
    <label v-bind:for="'cat-' + catId" v-bind:class="'bg-' + color.id" @click="selectCategory">
      {{ text }}
    </label>
  </div>
</template>

<script>
  export default {
    name: 'Category',
    props: ['catId', 'text', 'color', 'catIndex'],
    data () {
      return {
        isActive: false
      };
    },
    methods: {
      selectCategory (e) {
        this.$store.commit('selectCategory', this.catId);
      }
    }
  };
</script>
