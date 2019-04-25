const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
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
  //增加源码文件映射，帮助调试代码，
  //1.source-map会单独生成一个map文件，出错了会标识当前源码报错的列和行   文件比较大但内容比较全，
  //2.eval-source-map不会生成单独的map文件，但是可以显示行和列
  //3.cheap-module-source-map不会产生列但是是一个单独的映射文件
  //4.cheap-module-eval-source-map不会产生文件集成在打包后的文件中，不会产生列
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      hash: true,
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true
      }
    })
  ]
};
