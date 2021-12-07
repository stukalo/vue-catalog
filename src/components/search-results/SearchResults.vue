<template>
  <div class="search-results">
    <div class="search-results_filter">
      <ResultsFilter v-bind:sort="sort" @sorting="this.handleSorting"/>
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
import FilmCard from './FilmCard.vue';
import ResultsFilter from './ResultsFilter.vue';
import { getFilms } from '../../mock/api';

export default {
  name: 'SearchResults',
  components: {
    ResultsFilter,
    FilmCard,
  },
  data() {
    return {
      isLoading: false,
      hasNext: true,
      results: [],
      sort: { by: 'year', dir: 'desc' },
    };
  },
  mounted() {
    console.log('> mounted', this.sort);
    window.addEventListener('scroll', this.handleScroll);
    this.getInitialResults();
  },
  unmounted() {
    console.log('> unmounted');
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    async handleSorting(value) {
      console.log('> handleSorting', value);
      const sort = { by: value, dir: 'desc' };
      this.sort = sort;
      this.results = await getFilms({ sort });
    },
    async getInitialResults() {
      console.log('> getInitialResults');
      const { sort } = this;
      this.results = await getFilms({ sort });
    },
    async getNextResults() {
      console.log('> getNextResults');
      const { sort } = this;
      this.isLoading = true;

      const results = await getFilms({
        from: this.results.length,
        sort,
      });

      if (results.length) {
        this.results = [...this.results, ...results];
      } else {
        this.hasNext = false;
      }

      this.isLoading = false;
    },
    handleScroll() {
      if (this.isLoading || !this.hasNext) {
        return;
      }

      const {
        scrollTop,
        offsetHeight,
      } = document.documentElement;

      const bottomOfWindow = scrollTop + window.innerHeight >= offsetHeight;

      if (bottomOfWindow) {
        this.getNextResults();
      }
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
