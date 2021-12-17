<template>
  <router-view/>
</template>
<script>
import * as actions from './constants/actions';
import { deepEqual } from './utils/deepEqual';
import { getFilms } from './mock/api';
import { mapActions, mapState } from 'vuex';

export default {

};
</script>
<style lang="less">
@import (once) "./assets/css/reset.less";
@import (reference) "./assets/css/variables.less";

body {
  background-color: @primaryBackground;
}

#app {
  min-width: @minPageWidth;
}
</style>
