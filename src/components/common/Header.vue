<template>
  <div class="header">
    <div class="header_logo">
      <router-link to="/">
        <Logo/>
      </router-link>
    </div>
    <nav class="header_navigation navigation" v-if="this.$route?.path !== '/'">
      <router-link to="/">
        <div class="navigation_icon-search"/>
      </router-link>
    </nav>
  </div>
</template>
<script>
import Logo from './Logo.vue';

export default {
  name: 'Header',
  components: {
    Logo,
  },
};
</script>
<style scoped lang="less">
@import "../../assets/css/variables.less";
.header {
  z-index: 1;
  display: flex;
  justify-content: space-between;
  height: 60px;
  align-items: center;
}

.header_logo {
  width: 200px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header_navigation {
  margin: 0 20px;
}

.navigation_icon-search {
  .boxMixin(28px);
  margin: 0 20px;
  background-color: @activeBackground;
  mask-image: url('../../assets/img/search.svg');
  cursor: pointer;
}

</style>
