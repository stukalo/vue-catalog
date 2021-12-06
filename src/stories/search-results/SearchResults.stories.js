import SearchResults from '../../components/search-results/SearchResults.vue';
import films from '../../mock/films.json';

export default {
  title: 'SearchResults',
};

const SearchResultsTemplate = (args) => ({
  components: { SearchResults },
  setup() {
    return { args };
  },
  template: '<div style="height: 100vh; display: flex;"><SearchResults v-bind="args"/></div>',
  methods: {},
});

export const template = SearchResultsTemplate.bind({});
template.args = {
  results: films.slice(0, 9),
};
