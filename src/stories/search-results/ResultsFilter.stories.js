import ResultsFilter from '../../components/search-results/components/ResultsFilter.vue';
import withStore from '../../../config/storybook/decorators/withStore';
import store from '../../store';

export default {
  title: 'search-results/ResultsFilter',
  decorators: [withStore(store)]
};

const ResultsFilterTemplate = () => ({
  components: { ResultsFilter },
  template: '<ResultsFilter/>',
});

export const template = ResultsFilterTemplate.bind({});
