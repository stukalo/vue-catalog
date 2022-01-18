import { shallowMount } from '@vue/test-utils';
import Logo from '../Logo.vue';

describe('Logo', () => {
  it('should render correctly', () => {
    const wrapper = shallowMount(Logo);
    expect(wrapper).toMatchSnapshot();
  });
});
