<template>
  <div v-bind:class="'category-select__category bg-' + color.id">
    <input type="radio" name="category" class="hidden"
      :id="'cat-' + catId" v-bind:checked="catIndex === 0 ? 'checked' : ''">
    <label v-bind:for="'cat-' + catId" @click="selectCategory">
      {{ text }}
    </label>
  </div>
</template>

<script>
  export default {
    name: 'Category',
    props: ['catId', 'text', 'color', 'catIndex'],
    computed: {
      _catId: function () {
        return this.catId;
      },
      _text: function () {
        return this.text;
      },
      _color: function () {
        return this.color;
      },
      _catIndex: function () {
        return this.catIndex;
      }
    },
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
