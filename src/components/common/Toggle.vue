<template>
  <div class='toggle'>
    <div class='toggle_title'>
      <span>{{ title }}</span>
    </div>
    <ul class="toggle_options options">
      <li class='options_item'
          v-bind:class="option.active && 'active'"
          v-for="option in options"
          :key="option.value"
          @click="this.onChange(option.value)"
      >
        <span>
          {{ option.text }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Toggle',
  props: ['title', 'options'],
  methods: {
    onChange(value) {
      this.$emit('change', value);
    },
  },
};
</script>

<style scoped lang="less">
@import (reference) '../../assets/css/variables.less';
@import (once) '../../assets/css/reset.less';

.toggle {
  display: flex;
  width: fit-content;
  align-items: center;
  .fontMixin(18px);
  color: @primaryText;
  text-transform: uppercase;
}

.toggle_title {
  margin-right: 20px;
}

.toggle_options {
  display: flex;
  list-style: none;
  background-color: @secondaryBackgroundOpacity;
  border-radius: @primaryBorderRadius;
  overflow: hidden;
}

.options_item {
  padding: 0 20px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: @primaryBackgroundOpacity;

  &.active {
    background-color: @activeBackground;
  }
}

</style>
