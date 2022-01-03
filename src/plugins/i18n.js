export default {
  install: (app, strings) => {
    app.config.globalProperties.$translate = (stringKey) => {
      const value = stringKey.split('.')
        .reduce((acc, subKey) => {
          if (acc) {
            return acc[subKey];
          }
        }, strings);
      return value || stringKey;
    };
  }
};
