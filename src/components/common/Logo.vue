<template>
  <div class="logo"/>
</template>
<script>
export default {
  name: 'Logo',
};
</script>
<style scoped lang="less">
@import "../../assets/css/variables.less";

.logo {
  width: 200px;
  height: 40px;
  mask-position: center;
  mask-repeat: no-repeat;
  background-color: @activeBackground;
  mask-image: url("../../assets/img/netflix-logo.svg");
}
</style>
