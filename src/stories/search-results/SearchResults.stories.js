import SearchResults from '../../components/search-results/SearchResults.vue';
import withStore from '../../../config/storybook/decorators/withStore';

import store from '../../store';
import vueRouter from 'storybook-vue3-router';
import { routes } from '../../router';

export default {
  title: 'search-results/SearchResults',
  decorators: [withStore(store), vueRouter(routes, { initialRoute: '/' })],
};

const SearchResultsTemplate = () => ({
  components: { SearchResults },
  template: '<div style="height: 100vh; display: flex;"><SearchResults/></div>',
});

export const template = SearchResultsTemplate.bind({});
