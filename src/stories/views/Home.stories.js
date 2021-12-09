import Home from '../../views/Home.vue';
import films from '../../mock/films.json';

export default {
  title: 'views/Home',
};

const HomeTemplate = (args) => ({
  components: { Home },
  setup() {
    return { args };
  },
  template: '<Home v-bind="args"/>',
  methods: {},
});

export const template = HomeTemplate.bind({});
template.args = {
  search: { by: 'genre', value: 'Comedy' },
  sort: { by: 'year' },
  results: films.slice(0, 5),
};
