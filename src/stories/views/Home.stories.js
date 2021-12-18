import Home from '../../views/Home.vue';
import withStore from '../../../config/storybook/decorators/withStore';
import store from '../../store';
import vueRouter from 'storybook-vue3-router';
import { routes } from '../../router';

export default {
  title: 'views/Home',
  decorators: [withStore(store), vueRouter(routes, { initialRoute: '/' })],
};

const HomeTemplate = () => ({
  components: { Home },
  template: '<Home/>',
});

export const template = HomeTemplate.bind({});

