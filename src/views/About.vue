<template>
  <div class="about">
    <header class="about_header">
      <Header/>
    </header>
    <main class="about_main">
      <FilmDetails :id="id"/>
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
      const { id } = this.$route.params;
      this.id = id;
    },
  },
  data() {
    const { id } = this.$route.params;
    return {
      id,
    };
  },
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
  .headerMixin();
}
</style>
