import vueRouter from 'storybook-vue3-router';
import About from '../../views/About.vue';
import { routes } from '../../router';
import withStore from '../../../config/storybook/decorators/withStore';
import store from '../../store';

export default {
  title: 'views/About',
  decorators: [withStore(store), vueRouter(routes, { initialRoute: '/about/337167' })],
};

const AboutTemplate = () => ({
  components: { About },
  template: '<About/>',
});

export const template = AboutTemplate.bind({});
