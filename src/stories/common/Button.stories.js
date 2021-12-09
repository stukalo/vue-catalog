/* eslint-disable import/no-extraneous-dependencies */
import { action } from '@storybook/addon-actions';

import Button from '../../components/common/Button.vue';

export default {
  title: 'common/Button',
  argTypes: {
    slot: { control: 'text' },
  },
};

const ButtonTemplate = (args, { argTypes }) => ({
  components: { Button },
  data() {
    return {
      slot: args.slot,
    };
  },
  template: '<Button @click="action">{{slot}}</Button>',
  methods: { action: action('clicked') },
  props: Object.keys(argTypes),
});

export const template = ButtonTemplate.bind({});
template.args = {
  slot: 'button',
};
