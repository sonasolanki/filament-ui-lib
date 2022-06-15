module.exports = {
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-storyshots",
    "@ljcl/storybook-addon-cssprops"
  ],
  babelDefault: (config) => {
    return {
      ...config,
      plugins: [...config.plugins, [require.resolve('@babel/plugin-transform-react-jsx'), { pragma: 'h' }, 'preset']],
    };
  },
  framework: "@storybook/html",
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  // uncomment the property below if you want to apply some webpack config globally
  // webpackFinal: async (config, { configType }) => {
  //   // Make whatever fine-grained changes you need
  //   // Return the altered config
  //   return config;
  // },
};