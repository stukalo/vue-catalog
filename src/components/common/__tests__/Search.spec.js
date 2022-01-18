import { shallowMount } from '@vue/test-utils';
import Search from '../Search.vue';

const props = {
  search: {
    value: 'mock_value',
  },
  placeholder: 'mock_placeholder',
  buttonText: 'mock_button_text',
};

describe('Search', () => {
  it('should render correctly', () => {
    const wrapper = shallowMount(Search);
    expect(wrapper)
      .toMatchSnapshot();
  });

  describe('Input attributes', () => {
    let input;
    let wrapper;

    beforeEach(() => {
      wrapper = shallowMount(Search, {
        propsData: props,
      });
      input = wrapper.find('input');
    });

    it('should have correct placeholder', () => {
      expect(input.attributes().placeholder).toEqual(props.placeholder);
    });

    it('should have correct value', () => {
      expect(input.element.value).toEqual(props.search.value);
    });
  });
});
