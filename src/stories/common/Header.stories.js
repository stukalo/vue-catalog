import Header from '../../components/common/Header.vue';
import vueRouter from 'storybook-vue3-router';
import { routes } from '../../router';

export default {
  title: 'common/Header',
  decorators: [vueRouter(routes, { initialRoute: '/' })]
};

export const template = () => ({
  components: { Header },
  template: '<Header/>',
  methods: {},
});
