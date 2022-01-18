const _vue = require("@storybook/vue3");
const _addons = require("@storybook/addons");

const withPlugin = (plugin, property) => () => {
  return _addons.makeDecorator({
    wrapper: (storyFn, context) => {
      const existing = _vue.app.config.globalProperties[property];

      if (!existing) {
        _vue.app.use(plugin);
      }

      return storyFn(context);
    }
  });
};

export default withPlugin;
