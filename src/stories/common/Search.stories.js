/* eslint-disable import/no-extraneous-dependencies */
import { action } from '@storybook/addon-actions';
import Search from '../../components/common/Search.vue';

export default {
  title: 'common/Search',
};

const SearchTemplate = (args) => ({
  components: { Search },
  setup() {
    return { args };
  },
  template: '<Search v-bind="args" @submit="onSubmit" @valueChange="onValueChange"/>',
  methods: {
    onSubmit: action('submit'),
    onValueChange: action('valueChange'),
  },
});

export const template = SearchTemplate.bind({});
template.args = {
  search: {
    by: 'genre',
    value: 'Thriller',
  },
};
