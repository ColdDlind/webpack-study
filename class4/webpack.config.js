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
    // open: true,
    compress: true
  },
  module: {
    //模块
    rules: [
      {
        //css-loader解决Import导入css模块，style-loader解决插入html中，
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
            options: {
              insertAt: "top" //插入自己写的style标签上面
            }
          },
          {
            loader: "css-loader"
          }
        ]
      }
    ]
  },
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
