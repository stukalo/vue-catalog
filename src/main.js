import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './plugins/i18n';
import { getSearchParam } from './utils/url';
import { DEFAULT_LANG } from './constants/common';

const app = createApp(App).use(store).use(router);

const lang = getSearchParam('lang') || DEFAULT_LANG;
import(`./locales/${lang}.json`).then(locale => {
  app.use(i18n, locale);
  app.mount('#app');
});

