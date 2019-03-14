const VueLoaderPlugin = require('vue-loader/lib/plugin');

const IS_PRODUCTION = process.env.NODE_ENV === "production";

const baseConfig = {
  mode: IS_PRODUCTION ? "development" : "production",
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