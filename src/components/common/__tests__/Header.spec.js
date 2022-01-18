import { shallowMount } from '@vue/test-utils';
import Header from '../Header';
import { createOptions } from '../../../tests/createOptions';

const $route = {
  params: {
    id: '1',
  }
};

const $store = {
  state: {},
};


describe('Header', () => {
  let wrapper;

  beforeEach(() => {
    const options = createOptions({ $store, $route });
    wrapper = shallowMount(Header, options);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
