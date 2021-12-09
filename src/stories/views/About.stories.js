import About from '../../views/About.vue';
import films from '../../mock/films.json';
import vueRouter from 'storybook-vue3-router';

export default {
  title: 'views/About',
  decorators: [vueRouter([{ path: '/about/:id', name: 'about' }], { initialRoute: '/about/2' })],
};

const AboutTemplate = (args) => ({
  components: { About },
  setup() {
    return { args };
  },
  template: '<About v-bind="args"/>',
  methods: {},
});

export const template = AboutTemplate.bind({});
template.args = {
  film: films[0],
  sort: { by: 'year' },
  results: films.slice(0, 5),
};
