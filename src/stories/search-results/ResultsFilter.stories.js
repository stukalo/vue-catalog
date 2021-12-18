/* eslint-disable import/no-extraneous-dependencies */
import { action } from '@storybook/addon-actions';
import ResultsFilter from '../../components/search-results/components/ResultsFilter.vue';
import { createStore } from 'vuex';
import withStore from '../../../config/storybook/decorators/withStore';
import { createActionHandlers } from '../../../config/storybook/helpers/actionsHelper';
import { SORT_BY_CHANGE } from '../../constants/actions';

const store = createStore({
  state: {
    sort: {
      by: 'rating'
    }
  },
  actions: createActionHandlers({
    actions: [SORT_BY_CHANGE],
    handler: console.info
  }),
})

export default {
  title: 'search-results/ResultsFilter',
  decorators: [withStore(store)]
};

const ResultsFilterTemplate = (args) => ({
  components: { ResultsFilter },
  template: '<ResultsFilter/>',
});

export const template = ResultsFilterTemplate.bind({});
