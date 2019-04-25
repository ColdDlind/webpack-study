const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
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
    progress: true,
    // open: true,
    proxy: {
      //配置代理
      // "/api": {
      //   target: "http://localhost:3000",
      //   pathRewrite: {
      //     "/api": ""
      //   }
      // }
      // "/api": "http://localhost:3000"
      //自己模拟数据
      before(app) {   //devServer提供的钩子函数
        app.get("/user", (req, res) => {
          res.json({
            code: 0,
            msg: "success"
          });
        });
      }
    }
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
