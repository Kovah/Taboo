const path = require('path');

module.exports = {
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap(([options]) => [Object.assign(options, {
        template: path.resolve('index.html'),
      })]);
  },
};
