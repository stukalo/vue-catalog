/* eslint-disable import/no-extraneous-dependencies */
import { action } from '@storybook/addon-actions';
import ResultsFilter from '../../components/search-results/components/ResultsFilter.vue';

export default {
  title: 'search-results/ResultsFilter',
};

const ResultsFilterTemplate = (args) => ({
  components: { ResultsFilter },
  setup() {
    return { args };
  },
  template: '<ResultsFilter v-bind="args" @change="action"/>',
  methods: {},
});

export const template = ResultsFilterTemplate.bind({});
template.args = {
};
