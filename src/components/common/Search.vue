<template>
  <input id='search-input' type="text"/>
</template>

<script>
export default {
  name: 'Search',

  methods: {
    onChange() {
      this.$emit('change');
    },
  },
};
</script>

<style scoped>
  #search-input {
    color: white;
    background-color: blue;
  }
</style>
