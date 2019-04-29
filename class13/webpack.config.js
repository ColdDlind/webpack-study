const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
module.exports = {
  mode: "development", //打包模式   production development
  entry: "./src/index.js", //入口
  output: {
    filename: "bundle.js", //打包后的文件  加hash
    path: path.resolve(__dirname, "dist") //路径为绝对路径
  },
  devServer: {
    //webpack-dev-server配置
    port: 8090,
    progress: true
    // open: true,
  },
  resolve: {
    modules: [path.resolve("node_modules")]
  },
  module: {
    noParse:/jquery/,   //不去解析JQUERY的依赖库
    //模块
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/,/moment$/),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      hash: true,
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true
      }
    })
  ]
};
