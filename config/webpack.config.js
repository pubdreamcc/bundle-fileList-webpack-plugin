const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const LogSuccessPlugin = require('./plugins/log-success-plugin');
const BundlefileListWebpackPlugin = require('../lib/index');
module.exports = {
  // 为了便于测试这里将webpack 打包环境置于 开发环境
  mode: 'development',
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle.js'
  },
  resolve: {
    modules: ["node_modules", path.resolve(__dirname, '../src')],
    extensions: ['.js', '.json', '.jsx', '.css']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      filename: 'index.html'
    }),
    new CleanWebpackPlugin(),
    new LogSuccessPlugin({
      msg: '打包成功！'
    }),
    new BundlefileListWebpackPlugin({
      filename: 'myAssetsList.md'
    })
  ]
}