import { shallowMount } from '@vue/test-utils';
import Button from '../Button.vue';

describe('Button', () => {
  it('should render correctly', () => {
    const wrapper = shallowMount(Button);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have slots text', () => {
    const text = 'new message';
    const wrapper = shallowMount(Button, {
      slots: {
        default: text,
      },
    });
    expect(wrapper.text()).toMatch(text);
  });
});
