<template>
  <div class="search-results">
    <div class="search-results_filter">
      <ResultsFilter :sort="sort"/>
    </div>
    <div class="search-results_cards">
      <div class="search-results_empty"
           v-if="!this.results.length"
      >
        <span>No films found</span>
      </div>
      <div class="search-results_card"
           v-for="item in this.results"
           :key="item.id"
           @click.native="this.scrollToTop()"
      >
        <router-link :to="{path: `/about/${item.id}`}">
          <FilmCard :film="item"/>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import FilmCard from './components/FilmCard.vue';
import ResultsFilter from './components/ResultsFilter.vue';
import * as actions from '../../store/actions';

export default {
  name: 'SearchResults',
  components: {
    ResultsFilter,
    FilmCard,
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.getInitialResults();
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  computed: mapState({
    hasNext: state => state.hasNext,
    isLoading: state => state.isLoading,
    sort: state => state.sort,
    results: state => state.results || [],
  }),
  methods: {
    ...mapActions({
      getInitialResults: actions.GET_INITIAL_SEARCH_RESULTS,
      getNextResults: actions.GET_NEXT_SEARCH_RESULTS,
    }),
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
    scrollToTop() {
      window.scrollTo(0, 0);
    }
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
  justify-content: space-around;
  flex: 1;
}

.search-results_card {
  margin: 20px;

  a {
    text-decoration: none;
  }
}


@media only screen and (max-width: 600px) {
  .results-filter {
    padding: 10px;
    justify-content: center;
  }

  .search-results_cards {
    padding: 0;
  }
}
</style>
