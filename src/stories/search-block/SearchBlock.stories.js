import SearchBlock from '../../components/search-block/SearchBlock.vue';
import withStore from '../../../config/storybook/decorators/withStore';
import store from '../../store';

export default {
  title: 'search-block/SearchBlock',
  decorators: [withStore(store)]
};

const SearchBlockTemplate = () => ({
  components: { SearchBlock },
  template: '<SearchBlock/>',
});

export const template = SearchBlockTemplate.bind({});
