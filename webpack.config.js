/* eslint-disable @typescript-eslint/no-var-requires */
require('es6-promise').polyfill();
const path = require('path');

module.exports = {
  mode: 'production',
  target: 'web',
  entry: ['whatwg-fetch', '@babel/polyfill', './src/index.ts'],
  output: {
    path: path.resolve(__dirname, './dist/src'),
    filename: 'bundle.js',
    library: 'Panopticon',
    libraryTarget: 'commonjs-module',
    umdNamedDefine: true,
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
      {
        test: /\.tsx?/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
