const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
module.exports = {
  mode: "development", //打包模式   production development
  entry: {
    //多入口打包
    home: "./src/home.js",
    index: "./src/index.js"
  }, //入口
  output: {
    filename: "[name].js", //打包后的文件  加hash
    path: path.resolve(__dirname, "dist") //路径为绝对路径
    // publicPath: "http://www.baidu.com",     //所有资源统一给路径加入些路径，
  },
  devServer: {
    //webpack-dev-server配置
    port: 8090,
    progress: true
    // open: true,
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
    //根模式有关，开发环境中不会压缩代码，生产环境中会压缩代码   注意：生产环境中JS代码默认压缩，但加入css压缩后，必须手动new TerserJSPlugin才会压缩
  },
  module: {
    //模块
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: "html-withimg-loader"
        }
      },
      {
        test: /\.(png|jpg|git)$/,
        use: {
          loader: "url-loader",
          // 做一个图片限制，当图片小于5k时，生成base64
          options: {
            limit: 5 * 1024,
            outputPath: "/img/",
            publicPath: "http://www.baidu.com" //所有图片单独加前缀
          }
        }
      },
      {
        //css-loader解决Import导入css模块，style-loader解决插入html中，
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader"
          },
          "postcss-loader"
        ]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader"
          },
          "postcss-loader",
          {
            loader: "less-loader"
          }
        ]
      },
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
      //打包多个模板
      template: "./src/index.html",
      filename: "home.html",
      chunks: ["home"] //引入单独的Home模块所需资源
    }),
    new HtmlWebpackPlugin({
      //打包多个模板
      template: "./src/index.html",
      filename: "index.html",
      chunks: ["index"] //引入单独的index模块所需资源
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "[id].css"
    })
  ]
};
