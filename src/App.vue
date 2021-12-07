<template>
  <router-view
    :film="film"
    :results="results"
    :search="search"
    :sort="sort"
    @action="this.onAction"
  />
</template>
<script>
import * as actions from './constants/actions';
import { deepEqual } from './utils/deepEqual';
import { getFilms } from './mock/api';

export default {
  data() {
    return {
      film: null,
      isLoading: false,
      hasNext: true,
      results: [],
      sort: {
        by: 'year',
        dir: 'desc',
      },
      search: {
        by: 'title',
        value: '',
      },
    };
  },
  mounted() {
    console.log('> search', this.search);
    console.log('> mounted', this.sort);
    window.addEventListener('scroll', this.handleScroll);
    this.getInitialResults();
  },
  unmounted() {
    console.log('> unmounted');
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    onAction(action) {
      console.log('> onAction', action);
      switch (action.type) {
        case actions.SEARCH_SUBMIT: {
          this.getInitialResults();
          break;
        }
        case actions.SORT_CHANGE: {
          this.$data.sort = action.payload;
          this.getInitialResults();
          break;
        }
        case actions.SEARCH_BY_CHANGE: {
          this.$data.search.by = action.payload;
          this.getInitialResults();
          break;
        }
        case actions.SEARCH_VALUE_CHANGE: {
          this.$data.search.value = action.payload;
          this.getInitialResults();
          break;
        }
        case actions.SELECTED_CHANGE: {
          this.getFilm(action.payload);
          break;
        }
        default: {
          console.warn('unhandled action', action);
        }
      }
    },
    handleSubmit(search) {
      console.log('> handleSubmit', search);
      if (!deepEqual(search, this.search)) {
        this.search = search;
      }
    },
    async getInitialResults() {
      console.log('> getInitialResults');
      const { sort, search } = this;
      this.results = await getFilms({ sort, search });
    },
    async getNextResults() {
      console.log('> getNextResults');
      const { sort, search } = this;
      this.isLoading = true;

      const results = await getFilms({
        from: this.results.length,
        sort,
        search,
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
    getFilm(id) {
      getFilms({ search: { by: 'id', value: Number(id) } }).then((films) => {
        this.$data.film = films[0];
      });
    },
  },
};
</script>
<style lang="less">
@import (once) "./assets/css/reset.less";
@import (reference) "./assets/css/variables.less";

#app {
  min-width: @minPageWidth;
}
</style>
