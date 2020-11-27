// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  mode: 'production',
  target: 'web',
  entry: {
    main: './src/index.ts',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
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
        test: /\.tsx?/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
