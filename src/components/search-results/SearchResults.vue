<template>
  <div class="search-results">
    <div class="search-results_filter">
      <ResultsFilter v-bind:sort="sort"
                     @action="this.onAction"
      />
    </div>
    <div class="search-results_cards">
      <div class="search-results_empty"
           v-if="!results.length"
      >
        <span>No films found</span>
      </div>
      <div class="search-results_card"
           v-for="item in results"
           :key="item.id"
      >
        <router-link :to="{path: `/about/${item.id}`}">
          <FilmCard :film="item"/>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import FilmCard from './components/FilmCard.vue';
import ResultsFilter from './components/ResultsFilter.vue';

export default {
  name: 'SearchResults',
  components: {
    ResultsFilter,
    FilmCard,
  },
  props: ['results', 'sort'],
  methods: {
    onAction(data) {
      this.$emit('action', data);
      console.log('> onAction', data);
    },
  },
};
</script>

<style scoped lang="less">
@import (reference) "../../assets/css/variables.less";

.search-results {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.search-results_empty {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  .fontMixin(35px);
  color: @primaryText;
}

.search-results_cards {
  background-color: @primaryBackground;
  padding: 40px 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex: 1;
}

.search-results_card {
  margin: 20px;
}
</style>
