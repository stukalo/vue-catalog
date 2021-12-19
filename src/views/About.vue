<template>
  <div class="about">
    <header class="about_header">
      <Header/>
    </header>
    <main class="about_main">
      <FilmDetails/>
      <SearchResults/>
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
import * as actions from '../store/actions';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'About',
  components: {
    FilmDetails,
    Footer,
    Header,
    SearchResults,
  },
  watch: {
    $route() {
      if (this.$route.params.id) {
        this.selectedChange(this.$route.params.id);
      }
    }
  },
  methods: {
    ...mapActions({
      selectedChange: actions.SELECTED_CHANGE,
    }),
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
