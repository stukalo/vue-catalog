<template>
  <div id='search-results'>
  </div>
</template>

<script>
export default {
  name: 'SearchResults',
};
</script>

<style scoped lang="less">
@import (reference) "../../assets/css/_variables.less";

#search-results {
  background-color: @primaryBackground;
  padding: 3rem 2rem;
}
</style>
