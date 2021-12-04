module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: [
    '**/__tests__/*.spec.js',
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
};
