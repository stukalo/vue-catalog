/* eslint-disable import/no-extraneous-dependencies */
import FilmDetails from '../../components/film-details/FilmDetails.vue';
import withStore from '../../../config/storybook/decorators/withStore';
import withTranslate from '../../../config/storybook/decorators/withTranslate';
import withPlugin from '../../../config/storybook/decorators/withPlugin';
import common from '../../plugins/common';
import store from '../../../config/storybook/mock/store';

export default {
  title: 'film-details/FilmDetails',
  decorators: [withStore(store), withTranslate(), withPlugin(common)()]
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
