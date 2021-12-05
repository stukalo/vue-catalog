/* eslint-disable import/no-extraneous-dependencies */
import { action } from '@storybook/addon-actions';
import Toggle from '../../components/common/Toggle.vue';

export default {
  title: 'Toggle',
};

const ToggleTemplate = (args) => ({
  components: { Toggle },
  setup() {
    return { args };
  },
  template: '<Toggle v-bind="args" @change="action"/>',
  methods: { action: action('change') },
});

export const template = ToggleTemplate.bind({});
template.args = {
  title: 'Search by',
  options: [
    {
      value: 'title',
      text: 'Title',
      active: true,
    },
    {
      value: 'genre',
      text: 'Genre',
    },
  ],
};
