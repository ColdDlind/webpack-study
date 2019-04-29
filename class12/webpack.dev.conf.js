const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.conf");
const webpack = require("webpack");
module.exports = merge(baseConfig, {
  mode: "development",
  plugins: [
    new webpack.DefinePlugin({
      env: JSON.stringify("dev")
    })
  ]
});
