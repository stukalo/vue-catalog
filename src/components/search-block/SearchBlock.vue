<template>
  <div class='search-block'>
    <div class="search-block_layer layer">
      <div class="layer_image"/>
    </div>
    <div class="search-block_search search">
      <h1>{{$translate('FIND_YOUR_MOVIE')}}</h1>
      <div class="search_search">
        <Search :search="search"
                @submit="this.onSubmit"
                @valueChange="this.onSearchValueChange"
                :placeholder="$translate('SEARCH')"
                :buttonText="$translate('SEARCH')"
        />
      </div>
      <div class="search_toggle">
        <Toggle :title="$translate('SEARCH_BY')"
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
import * as actions from '../../store/actions';
import {mapState, mapActions} from 'vuex';

export default {
  name: 'SearchBlock',
  components: {
    Toggle,
    Search,
  },
  computed: mapState({
    search: state => state.search,
  }),
  methods: {
    ...mapActions({
      onSubmit: actions.SEARCH_SUBMIT,
      onSearchByChange: actions.SEARCH_BY_CHANGE,
      onSearchValueChange: actions.SEARCH_VALUE_CHANGE,
    }),
    getFilterOptions() {
      return [{
        value: 'title',
        text: this.$translate('TITLE'),
        active: this.search.by === 'title',
      }, {
        value: 'genre',
        text: this.$translate('GENRE'),
        active: this.search.by === 'genre',
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

@media only screen and (max-width: 600px) {
  .search-block {
    height: auto;
  }

  .search-block_search {
    padding: 120px 10% 50px 10%;
  }

  .search_toggle {
    margin-top: 28px;
  }
}
</style>
