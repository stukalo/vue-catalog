import About from '../../views/About.vue';

export default {
  title: 'views/About',
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
};
