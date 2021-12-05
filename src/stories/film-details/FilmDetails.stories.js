/* eslint-disable import/no-extraneous-dependencies */
import { action } from '@storybook/addon-actions';
import FilmDetails from '../../components/film-details/FilmDetails.vue';
import films from '../../mock/films.json';

export default {
  title: 'FilmDetails',
};

const FilmDetailsTemplate = (args) => ({
  components: { FilmDetails },
  setup() {
    return { args };
  },
  template: '<FilmDetails v-bind="args" @click="action"/>',
  methods: { action: action('click') },
});

export const template = FilmDetailsTemplate.bind({});
template.args = {
  film: films[0],
};
