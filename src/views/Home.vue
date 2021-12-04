<template>
  <div class="home">
    <SearchBlock/>
    <SearchResults/>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBlock from '../components/search-block/SearchBlock.vue';
import SearchResults from '../components/search-results/SearchResults.vue';

export default {
  name: 'Home',
  components: {
    SearchBlock,
    SearchResults,
  },
};
</script>
