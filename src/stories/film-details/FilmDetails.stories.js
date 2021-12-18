/* eslint-disable import/no-extraneous-dependencies */
import FilmDetails from '../../components/film-details/FilmDetails.vue';
import films from '../../mock/films.json';
import withStore from '../../../config/storybook/decorators/withStore';
import { createStore } from 'vuex';

const store = createStore({
  state: {
    film: films[0],
  },
});

export default {
  title: 'film-details/FilmDetails',
  decorators: [withStore(store)]
};

const FilmDetailsTemplate = (args) => ({
  components: { FilmDetails },
  template: '<FilmDetails/>',
});

export const template = FilmDetailsTemplate.bind({
});
