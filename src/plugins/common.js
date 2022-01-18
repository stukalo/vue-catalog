import { DEFAULT_IMG_SRC } from '../constants/common';

export default {
  install: (app) => {
    app.config.globalProperties.$replaceImg404 = (e) => {
      e.target.src = DEFAULT_IMG_SRC;
    };
  }
};
