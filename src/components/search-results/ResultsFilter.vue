<template>
  <div class="results-filter">
    <div class="results-filter_sorting">
      <Toggle :title="this.sorting.title"
              :options="this.sorting.options"
      />
    </div>
  </div>
</template>
<script>
import Toggle from '../common/Toggle.vue';

export default {
  name: 'ResultsFilter',
  components: { Toggle },
  data: () => ({
    sorting: {
      title: 'SortBy',
      options: [{
        value: 'releaseDate',
        text: 'Release date',
        active: true,
      }, {
        value: 'rating',
        text: 'Rating',
      }],
    },
  }),
};
</script>
<style scoped lang="less">
@import "../../assets/css/variables.less";

.results-filter {
  height: 70px;
  background-color: @secondaryBackground;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 120px;
}
</style>
