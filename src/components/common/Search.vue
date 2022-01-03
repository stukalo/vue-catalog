<template>
  <div class='search'>
    <input
      class='search_input'
      type="text"
      ref="search-input"
      autocomplete="off"
      spellcheck="false"
      :placeholder="placeholder"
      @input="this.onInput"
      :value="search.value"
    />
    <Button
      type="button"
      class='search_button'
      @click="this.onSubmit"
    >
      {{buttonText}}
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
  props: {
    search: {
      default: {
        value: '',
      }
    },
    placeholder: {
      default: 'Search'
    },
    buttonText: {
      default: 'Search',
    },
  },
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
  display: flex;
  .fontMixin(25px);
}

.search_input {
  flex: 1;
  border: none;
  box-sizing: border-box;
  min-height: 60px;
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

@media only screen and (max-width: 600px) {
  .search {
    flex-direction: column;
  }

  .search_input {
    margin: 0 0 10px 0;
  }
}

</style>
