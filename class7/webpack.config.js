const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
module.exports = {
  mode: "development", //打包模式   production development
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
            outputPath: "img/",
            // publicPath: "http://www.baidu.com" //所有图片单独加前缀
          }
        }
      },
      {
        //css-loader解决Import导入css模块，style-loader解决插入html中，
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../"
            }
          },
          {
            loader: "css-loader"
          },
          "postcss-loader"
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../"       //如果mini-css-extract-plugin中放置到了css下，就需要配置publicPath来处理css中的背景图路径问题
            }
          },
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
      template: "./src/index.html",
      filename: "index.html",
      hash: true,
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "[id].css"
    })
  ]
};
