<template>
  <div class="results-filter">
    <div class="results-filter_sorting">
      <Toggle :title="$translate('SORT_BY')"
              :options="this.getSortingOptions()"
              @change="this.onSortByChange"
      />
    </div>
  </div>
</template>
<script>
import * as actions from '../../../store/actions';
import Toggle from '../../common/Toggle.vue';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'ResultsFilter',
  components: { Toggle },
  computed: mapState({
    sort: state => state.sort,
  }),
  methods: {
    ...mapActions({
      onSortByChange: actions.SORT_BY_CHANGE,
    }),
    getSortingOptions() {
      return [
        {
          value: 'year',
          text: this.$translate('RELEASE_DATE'),
          active: this.sort?.by === 'year',
        },
        {
          value: 'rating',
          text: this.$translate('RATING'),
          active: this.sort?.by === 'rating',
        },
      ];
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
