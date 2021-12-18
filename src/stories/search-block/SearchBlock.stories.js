import SearchBlock from '../../components/search-block/SearchBlock.vue';
import withStore from '../../../config/storybook/decorators/withStore';
import { createStore } from 'vuex';
import * as actions from '../../constants/actions';
import { createActionHandlers } from '../../../config/storybook/helpers/actionsHelper';
import { SEARCH_BY_CHANGE, SEARCH_SUBMIT, SEARCH_VALUE_CHANGE } from '../../constants/actions';

const store = createStore({
  state: {
    search: {
      by: 'title'
    }
  },
  actions: createActionHandlers({
    actions: [SEARCH_SUBMIT, SEARCH_BY_CHANGE, SEARCH_VALUE_CHANGE],
    handler: console.info,
  }),
});

export default {
  title: 'search-block/SearchBlock',
  decorators: [withStore(store)]
};

const SearchBlockTemplate = (args) => ({
  components: { SearchBlock },
  template: '<SearchBlock/>',
});

export const template = SearchBlockTemplate.bind({});
