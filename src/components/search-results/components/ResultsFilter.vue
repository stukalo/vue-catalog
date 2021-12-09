<template>
  <div class="results-filter">
    <div class="results-filter_sorting">
      <Toggle title="Sort By"
              :options="this.getSortingOptions()"
              @change="this.onSortByChange"
      />
    </div>
  </div>
</template>
<script>
import * as actions from '../../../constants/actions';
import Toggle from '../../common/Toggle.vue';

export default {
  name: 'ResultsFilter',
  components: { Toggle },
  props: ['sort'],
  methods: {
    getSortingOptions() {
      return [
        {
          value: 'year',
          text: 'Release date',
          active: this.$props.sort?.by === 'year',
        },
        {
          value: 'rating',
          text: 'Rating',
          active: this.$props.sort?.by === 'rating',
        },
      ];
    },
    onSortByChange(value) {
      this.$emit('action', { type: actions.SORT_CHANGE, payload: { ...this.$props.sort, by: value } });
    },
  },
};
</script>
<style scoped lang="less">
@import "../../../assets/css/variables.less";

.results-filter {
  height: 70px;
  background-color: @secondaryBackground;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 120px;
}
</style>
