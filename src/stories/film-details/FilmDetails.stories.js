/* eslint-disable import/no-extraneous-dependencies */
import FilmDetails from '../../components/film-details/FilmDetails.vue';
import withStore from '../../../config/storybook/decorators/withStore';
import store from '../../store';

export default {
  title: 'film-details/FilmDetails',
  decorators: [withStore(store)]
};

const FilmDetailsTemplate = () => ({
  components: { FilmDetails },
  setup() {
    console.log(store.state);
  },
  template: '<FilmDetails/>',
});

export const template = FilmDetailsTemplate.bind({
});
