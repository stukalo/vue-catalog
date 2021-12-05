/* eslint-disable import/no-extraneous-dependencies */
import { action } from '@storybook/addon-actions';

import Button from '../../components/common/Button.vue';

export default {
  title: 'Button',
};

export const template = () => ({
  components: { Button },
  template: '<Button @click="action">Button</Button>',
  methods: { action: action('clicked') },
});
