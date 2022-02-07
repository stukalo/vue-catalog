<template>
  <div class="not-found">
    <header class="not-found_header">
      <Header/>
    </header>
    <main class="not-found_main">
      <span class="main_text">404 (Page Not Found)</span>
    </main>
    <footer class="not-found_footer">
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
import Header from '../components/common/Header.vue';
import Footer from '../components/common/Footer.vue';

export default {
  name: 'NotFound',
  components: {
    Footer,
    Header,
  },
};
</script>
<style scoped lang="less">
@import "../assets/css/variables.less";

.not-found {
  position: relative;;
  min-width: @minPageWidth;
  min-height: @minPageHeight;
  display: flex;
  flex-direction: column;
  font-family: @fontFamily;
  font-size: 30px;
}

.not-found_header {
  .headerMixin();
}

.not-found_main {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.main_text {
  color: @activeText;
}
</style>
