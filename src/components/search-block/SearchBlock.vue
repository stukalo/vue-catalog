<template>
  <div class='search-block'>
    <div class="search-block_layer layer">
      <div class="layer_image"/>
    </div>
    <div class="search-block_search search">
      <h1>Find your movie</h1>
      <div class="search_search">
        <Search :search="search"
                @submit="this.onSubmit"
                @valueChange="this.onSearchValueChange"
        />
      </div>
      <div class="search_toggle">
        <Toggle title="Search by"
                :options="this.getFilterOptions()"
                @change="this.onSearchByChange"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Search from '../common/Search.vue';
import Toggle from '../common/Toggle.vue';
import * as actions from '../../constants/actions';

export default {
  name: 'SearchBlock',
  components: {
    Toggle,
    Search,
  },
  props: ['search'],
  methods: {
    onSubmit() {
      this.$emit('action', { type: actions.SEARCH_SUBMIT });
    },
    onSearchValueChange(value) {
      this.$emit('action', { type: actions.SEARCH_VALUE_CHANGE, payload: value });
    },
    onSearchByChange(value) {
      this.$emit('action', { type: actions.SEARCH_BY_CHANGE, payload: value });
    },
    getFilterOptions() {
      return [{
        value: 'title',
        text: 'Title',
        active: this.$props.search.by === 'title',
      }, {
        value: 'genre',
        text: 'Genre',
        active: this.$props.search.by === 'genre',
      }];
    },
  },
};
</script>

<style scoped lang="less">
@import "../../assets/css/variables.less";

.search-block {
  height: 400px;
  position: relative;
  display: flex;
  overflow: hidden;
}

.search-block_search {
  width: 100%;
  padding: 120px 120px 0 120px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  h1 {
    .fontMixin(34px);
    text-transform: uppercase;
    color: @primaryText;
    margin-bottom: 30px;
    font-weight: 400;
  }
}

.search-block_layer {
  .layerMixin(
    "../../assets/img/moveis.jpg", 5px, 0.6
  );
}

.search_toggle {
  margin-top: 18px;
}
</style>
