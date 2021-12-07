import Home from '../../views/Home.vue';

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
};
