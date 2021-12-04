import { shallowMount } from '@vue/test-utils';
import Button from '../Button.vue';

describe('Button.vue', () => {
  it('renders props.msg when passed', () => {
    const text = 'new message';
    const wrapper = shallowMount(Button, {
      slots: {
        default: text,
      },
    });
    expect(wrapper.text()).toMatch(text);
  });
});
