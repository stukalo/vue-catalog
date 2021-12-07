<template>
  <div class="about">
    <header class="about_header">
      <Header/>
    </header>
    <main class="about_main">
      <FilmDetails :film="film"/>
      <SearchResults
        @action="this.onAction"
        :sort="sort"
        :results="results"
      />
    </main>
    <footer class="about_footer">
      <Footer/>
    </footer>
  </div>
</template>
<style>
h1 {
  font-family: 'Raleway', sans-serif;
  font-size: 100px;
}
</style>
<script>
import SearchResults from '../components/search-results/SearchResults.vue';
import Header from '../components/common/Header.vue';
import Footer from '../components/common/Footer.vue';
import FilmDetails from '../components/film-details/FilmDetails.vue';
import * as actions from '../constants/actions';

export default {
  name: 'About',
  components: {
    FilmDetails,
    Footer,
    Header,
    SearchResults,
  },
  props: ['film', 'sort', 'results'],
  watch: {
    $route() {
      this.selectedChange();
    },
  },
  beforeMount() {
    this.selectedChange();
  },
  methods: {
    onAction(data) {
      this.$emit('action', data);
    },
    selectedChange() {
      const { id } = this.$route.params;
      this.$emit('action', { type: actions.SELECTED_CHANGE, payload: id });
    }
  },
};
</script>
<style scoped lang="less">
@import (reference) "../assets/css/reset.less";
@import (once) "../assets/css/variables.less";

.about {
  position: relative;
  min-width: @minPageWidth;
}

.about_header {
  .headerMixin();
}
</style>
