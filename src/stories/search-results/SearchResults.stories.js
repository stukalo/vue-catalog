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
  template: '<SearchResults v-bind="args"/>',
  methods: {},
});

export const template = SearchResultsTemplate.bind({});
template.args = {
  results: films.slice(0, 9),
};
