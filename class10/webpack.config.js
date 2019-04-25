const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
// 1.cleanWebpackPlugin
// 2.copyWebpackPlugin
// 3.bannerPlugin  内置
module.exports = {
  mode: "production", //打包模式   production development
  entry: "./src/index.js", //入口
  output: {
    filename: "bundle.js", //打包后的文件  加hash
    path: path.resolve(__dirname, "dist") //路径为绝对路径
    // publicPath: "http://www.baidu.com",     //所有资源统一给路径加入些路径，
  },
  devServer: {
    //webpack-dev-server配置
    port: 8090,
    progress: true
    // open: true,
  },
  module: {
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
    new CleanWebpackPlugin(), //清理文件
    new CopyWebpackPlugin([
      //拷贝文件
      {
        from: "./cdn",
        to: "./"
      }
    ]),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      hash: true,
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true
      }
    }),
    new webpack.BannerPlugin("dlyndon made")
  ]
};
