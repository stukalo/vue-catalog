<template>
  <div class="search-results">
    <div class="search-results_filter">
      <ResultsFilter/>
    </div>
    <div class="search-results_cards">
      <div class="search-results_card"
           v-for="item in results"
           :key="item.id"
      >
        <FilmCard :film="item"/>
      </div>
    </div>
  </div>
</template>

<script>
import FilmCard from './FilmCard.vue';
import ResultsFilter from './ResultsFilter.vue';

export default {
  name: 'SearchResults',
  components: { ResultsFilter, FilmCard },
  props: ['results'],
};
</script>

<style scoped lang="less">
@import (reference) "../../assets/css/variables.less";

.search-results {
  display: flex;
  flex-direction: column;
}

.search-results_cards {
  background-color: @primaryBackground;
  padding: 40px 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.search-results_card {
  margin: 20px;
}
</style>
