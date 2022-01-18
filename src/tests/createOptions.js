import { createStore } from 'vuex';
import i18n from '../plugins/i18n';

export const createOptions = ({ $store = {}, $route = {} }) => {
  const store = createStore($store);
  return {
    global: {
      plugins: [i18n, store],
      mocks: {
        $route,
      },
    },
  };
}
