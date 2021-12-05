<template>
  <div class="about">
    <header class="about_header">
      <Header/>
    </header>
    <main class="about_main">
      <FilmDetails :film="this.film"/>
      <SearchResults :results="this.films"/>
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
import films from '../mock/films.json';
import Header from '../components/common/Header.vue';
import Footer from '../components/common/Footer.vue';
import FilmDetails from '../components/film-details/FilmDetails.vue';

export default {
  name: 'About',
  components: {
    FilmDetails,
    Footer,
    Header,
    SearchResults,
  },
  data: () => ({
    film: films[0],
    films: films.slice(0, 9),
  }),
};
</script>
<style scoped lang="less">
@import (reference) "../assets/css/reset.less";
@import (once) "../assets/css/variables.less";

.about {
  position: relative;;
  min-width: @minPageWidth;
}

.about_header {
  width: 100%;
  position: absolute;
}
</style>
