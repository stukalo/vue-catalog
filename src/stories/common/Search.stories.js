/* eslint-disable import/no-extraneous-dependencies */
import { action } from '@storybook/addon-actions';
import Search from '../../components/common/Search.vue';

export default {
  title: 'common/Search',
};

export const template = () => ({
  components: { Search },
  template: '<Search @submit="onSubmit" @valueChange="onValueChange"/>',
  methods: {
    onSubmit: action('submit'),
    onValueChange: action('valueChange'),
  },
});
