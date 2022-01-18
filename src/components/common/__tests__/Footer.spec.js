import { shallowMount } from '@vue/test-utils';
import Footer from '../Footer.vue';
import Logo from '../Logo.vue';

describe('Footer', () => {
  it('should render correctly', () => {
    const wrapper = shallowMount(Logo);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have Logo', () => {
    const wrapper = shallowMount(Footer);
    expect(wrapper.findComponent(Logo).exists()).toBeTruthy();
  });
});
