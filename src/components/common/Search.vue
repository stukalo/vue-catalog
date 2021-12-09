<template>
  <div class='search'>
    <input
      class='search_input'
      type="text"
      ref="search-input"
      autocomplete="off"
      spellcheck="false"
      placeholder="Search"
      @input="this.onInput"
      :value="search.value"
    />
    <Button
      class='search_button'
      @click="this.onSubmit"
    >
      Search
    </Button>
  </div>
</template>

<script>
import Button from './Button.vue';

export default {
  name: 'Search',
  components: {
    Button,
  },
  props: ['search'],
  methods: {
    onSubmit() {
      this.$emit('submit');
    },
    onInput(evt) {
      this.$emit('valueChange', evt.target.value);
    },
  },
};
</script>

<style scoped lang="less">
@import (reference) '../../assets/css/variables.less';
@import (reference) '../../assets/css/reset.less';

.search {
  min-width: 600px;
  display: flex;
  .fontMixin(25px);
}

.search_input {
  flex: 1;
  border: none;
  box-sizing: border-box;
  height: 60px;
  padding: 0 15px;
  margin: 0 14px 0 0;
  color: @primaryText;
  border-radius: @primaryBorderRadius;
  background-color: @primaryBackgroundOpacity;
  .fontMixin(22px);

  &:focus-visible {
    outline: none;
  }
}

</style>
