<template>
  <div class="results-filter">
    <div class="results-filter_sorting">
      <Toggle :title="this.sorting.title"
              :options="this.sorting.options"
              @change="this.handleToggle"
      />
    </div>
  </div>
</template>
<script>
import Toggle from '../common/Toggle.vue';

export default {
  name: 'ResultsFilter',
  components: { Toggle },
  props: ['sort'],
  mounted() {
    console.log('> ResultsFilter mounted', this.$props.sort);
  },
  watch: {
    sort(newProp, prevProp) {
      if (newProp.by !== prevProp.by) {
        this.$data.sorting.options = this.getSortingOptions();
      }
    },
  },
  data() {
    return {
      sorting: {
        title: 'SortBy',
        options: this.getSortingOptions(),
      },
    };
  },
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
    handleToggle(value) {
      this.$emit('sorting', value);
    },
  },
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
