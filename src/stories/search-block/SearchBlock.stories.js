import SearchBlock from '../../components/search-block/SearchBlock.vue';
import withStore from '../../../config/storybook/decorators/withStore';
import withTranslate from '../../../config/storybook/decorators/withTranslate';
import store from '../../store';

export default {
  title: 'search-block/SearchBlock',
  decorators: [withStore(store), withTranslate()]
};

const SearchBlockTemplate = () => ({
  components: { SearchBlock },
  template: '<SearchBlock/>',
});

export const template = SearchBlockTemplate.bind({});
