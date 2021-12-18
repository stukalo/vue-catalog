import { createStore } from 'vuex';

const _vue = require("@storybook/vue3");
const _addons = require("@storybook/addons");

const withVueStore = function withVueStore() {
  const store = arguments?.[0] || createStore({ state: {} });
  return _addons.makeDecorator({
    name: 'withStore',
    parameterName: 'withStore',
    wrapper: (storyFn, context) => {
      const existingStore = _vue.app.config.globalProperties.$store;

      if (!existingStore) {
        _vue.app.use(store);
      } else {
        existingStore.hotUpdate(store);
      }

      return storyFn(context);
    }
  });
};

export default withVueStore;
