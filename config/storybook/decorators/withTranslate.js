import i18n from '../../../src/plugins/i18n';
import en from '../../../src/locales/ru.json';

const _vue = require("@storybook/vue3");
const _addons = require("@storybook/addons");

const withTranslate = function withVueStore() {
  const locale = arguments?.[0] || en;
  return _addons.makeDecorator({
    name: 'withTranslate',
    parameterName: 'withTranslate',
    wrapper: (storyFn, context) => {
      const existingTranslate = _vue.app.config.globalProperties.$translate;

      if (!existingTranslate) {
        _vue.app.use(i18n, locale);
      }

      return storyFn(context);
    }
  });
};

export default withTranslate;
