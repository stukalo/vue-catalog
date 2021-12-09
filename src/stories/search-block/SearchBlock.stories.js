import SearchBlock from '../../components/search-block/SearchBlock.vue';

export default {
  title: 'search-block/SearchBlock',
};

const SearchBlockTemplate = (args) => ({
  components: { SearchBlock },
  setup() {
    return { args };
  },
  template: '<SearchBlock v-bind="args"/>',
  methods: {},
});

export const template = SearchBlockTemplate.bind({});
template.args = {
  search: {
    by: 'title',
    value: 'Kill Bill',
  },
};
