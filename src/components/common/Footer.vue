<template>
  <div class="footer">
    <Logo/>
  </div>
</template>
<script>
import Logo from './Logo.vue';

export default {
  name: 'Footer',
  components: {
    Logo,
  },
};
</script>
<style scoped lang="less">
@import "../../assets/css/variables.less";

.footer {
  height: 70px;
  background-color: @secondaryBackground;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
