import { shallowMount } from '@vue/test-utils';
import Toggle from '../Toggle.vue';

const props = {
  title: 'Title',
  options: [{
    text: 'Option-1',
    value: 'value-1',
    active: false,
  }, {
    text: 'Option-2',
    value: 'value-2',
    active: false,
  }]
};

describe('Toggle', () => {
  describe('render', () => {
    it('should render correctly', () => {
      const wrapper = shallowMount(Toggle);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('attributes', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallowMount(Toggle, {
        propsData: props,
      });
    });

    it('should have correct title', () => {
      const title = wrapper.find('.toggle_title>span');
      expect(title.text()).toEqual(props.title);
    });

    it('should have correct options and emmit change event', () => {
      const optionsItems = wrapper.findAll('.options_item');
      props.options.forEach(({ value, text, active }, index) => {
        const item = optionsItems[index];
        item.trigger('click');

        expect(wrapper.emitted().change[index][0]).toEqual(value);
        expect(item.find('span').text()).toEqual(text);
        expect(item.classes().includes('active')).toEqual(active);
      });
    });
  });
});
