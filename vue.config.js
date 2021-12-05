module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      less: {
        data: `
          @import "~@/assets/css/variables.less";
        `,
      },
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule('fonts')
      .test(/\.(ttf|otf|eot|woff|woff2)$/)
      .use('file-loader')
      .loader('file-loader')
      .tap((options) => {
        // eslint-disable-next-line no-param-reassign
        options = {
          limit: 10000,
          name: '/assets/css/fonts/[name].[ext]',
        };
        return options;
      })
      .end();
  },
};
