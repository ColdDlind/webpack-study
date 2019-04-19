const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development", //打包模式   production development
  entry: "./src/index.js", //入口
  output: {
    filename: "bundle.[hash:8].js", //打包后的文件  加hash
    path: path.resolve(__dirname, "dist") //路径为绝对路径
  },
  devServer: {
    //webpack-dev-server配置
    port: 8090,
    progress: true,
    contentBase: "./build",
    open: true,
    compress: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      hash: true,
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
      }
    })
  ]
};
