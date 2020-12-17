const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      templateParameters: {
        title: 'index페이지',
      },
    }),
    new HtmlWebpackPlugin({
      template: './src/test2.html',
      filename: './test2.html',
      templateParameters: {
        title: 'test2페이지',
      },
    }),
    new HtmlWebpackPlugin({
      template: './src/test3.html',
      filename: './test3.html',
      templateParameters: {
        title: 'test3페이지',
      },
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '/dist'),
    index: 'index.html',
    port: 9000,
    hot: true,
  },
};
