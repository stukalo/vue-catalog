<template>
  <router-view/>
</template>
<script>

export default {};

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
