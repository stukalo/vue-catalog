import NotFound from '../../views/NotFound.vue';
import vueRouter from 'storybook-vue3-router';
import { routes } from '../../router';

export default {
  title: 'views/NotFound',
  decorators: [vueRouter(routes, { initialRoute: '/unknown' })],
};

const NotFoundTemplate = () => ({
  components: { NotFound },
  template: '<NotFound/>',
});

export const template = NotFoundTemplate.bind({});

