<template>
  <button class='button' @click='onClick'>
    <slot/>
  </button>
</template>
<script>
export default {
  name: 'Button',
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>
<style scoped lang="less">
@import (reference) '../../assets/css/variables.less';

button {
  width: 230px;
  height: 60px;
  border: none;
  padding: 0;
  color: @primaryText;
  border-radius: @primaryBorderRadius;
  text-transform: uppercase;
  background-color: @activeBackground;
  cursor: pointer;
  .fontMixin(25px);
}
</style>
