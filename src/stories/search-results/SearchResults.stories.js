import SearchResults from '../../components/search-results/SearchResults.vue';
import films from '../../mock/films.json';
import withStore from '../../../config/storybook/decorators/withStore';
import { createStore } from 'vuex';
import { createActionHandlers } from '../../../config/storybook/helpers/actionsHelper';
import {
  GET_INITIAL_SEARCH_RESULTS,
  GET_NEXT_SEARCH_RESULTS,
  SORT_BY_CHANGE
} from '../../constants/actions';

const store = createStore({
  state: {
    hasNext: false,
    isLoading: false,
    sort: {
      by: 'year',
    },
    results: films.slice(0, 9),
  },
  actions: createActionHandlers({
    actions: [GET_NEXT_SEARCH_RESULTS, SORT_BY_CHANGE, GET_INITIAL_SEARCH_RESULTS],
    handler: console.info,
  }),
});

export default {
  title: 'search-results/SearchResults',
  decorators: [withStore(store)]
};

const SearchResultsTemplate = () => ({
  components: { SearchResults },
  template: '<div style="height: 100vh; display: flex;"><SearchResults/></div>',
});

export const template = SearchResultsTemplate.bind({});
