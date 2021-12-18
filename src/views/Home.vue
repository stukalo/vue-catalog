<template>
  <div class="home">
    <header class="home_header">
      <Header/>
    </header>
    <main class="home_main">
      <SearchBlock />
      <SearchResults/>
    </main>
    <footer class="home_footer">
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
import SearchBlock from '../components/search-block/SearchBlock.vue';
import SearchResults from '../components/search-results/SearchResults.vue';
import Header from '../components/common/Header.vue';
import Footer from '../components/common/Footer.vue';

export default {
  name: 'Home',
  components: {
    Footer,
    Header,
    SearchBlock,
    SearchResults,
  },
};
</script>
<style scoped lang="less">
@import "../assets/css/variables.less";

.home {
  position: relative;;
  min-width: @minPageWidth;
  min-height: @minPageHeight;
  display: flex;
  flex-direction: column;
}

.home_header {
  .headerMixin();
}

.home_main {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
