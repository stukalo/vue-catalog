/* eslint-disable import/no-extraneous-dependencies */
import { action } from '@storybook/addon-actions';
import Search from '../../components/common/Search.vue';

export default {
  title: 'Search',
};

export const template = () => ({
  components: { Search },
  template: '<Search @submit="action"/>',
  methods: { action: action('submit') },
});
