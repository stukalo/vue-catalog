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
  height: 60px;
  border: none;
  padding: 0 50px;
  color: @primaryText;
  border-radius: @primaryBorderRadius;
  text-transform: uppercase;
  background-color: @activeBackground;
  cursor: pointer;
  .fontMixin(25px);

  overflow: hidden;
  position: relative;

  &:after {
    background: #fff;
    content: "";
    height: 155px;
    left: -75px;
    opacity: .2;
    position: absolute;
    top: -50px;
    transform: rotate(35deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    width: 50px;
  }

  &:hover {
    &:after {
      left: 120%;
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    }
  }

}
</style>
