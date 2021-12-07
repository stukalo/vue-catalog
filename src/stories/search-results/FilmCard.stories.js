/* eslint-disable import/no-extraneous-dependencies */
import { action } from '@storybook/addon-actions';
import FilmCard from '../../components/search-results/components/FilmCard.vue';
import films from '../../mock/films.json';

export default {
  title: 'search-results/FilmCard',
};

const FilmCardTemplate = (args) => ({
  components: { FilmCard },
  setup() {
    return { args };
  },
  template: '<FilmCard v-bind="args" @click="action"/>',
  methods: { action: action('click') },
});

export const template = FilmCardTemplate.bind({});
template.args = {
  film: films[0],
};
