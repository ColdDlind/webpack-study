const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.conf");
const webpack = require("webpack");
const devWebpackConfig = merge(baseConfig, {
  mode: "production",
  plugins: [
    new webpack.DefinePlugin({
      env: JSON.stringify("production")
    })
  ]
});

module.exports = devWebpackConfig;
