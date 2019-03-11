const VueLoaderPlugin = require('vue-loader/lib/plugin');

const baseConfig = {
  module: {
    rules: [{
      test: /\.vue$/,
      use: [{
        loader: 'vue-loader',
      }, ],
    }, ],
  },
  plugins: [new VueLoaderPlugin()],
};

module.exports = baseConfig;