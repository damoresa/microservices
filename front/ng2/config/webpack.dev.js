const path = require('path');

const webpack = require('webpack');

module.exports = {

  devtool: 'cheap-module-source-map',
  devServer: {
    historyApiFallback: true
  },
  entry: require('./webpack.entry'),
  output: require('./webpack.output'),
  resolve: require('./webpack.resolve'),
  module: {
    rules: require('./webpack.rules').concat([
      // -------------------------------------------------------------------
      {
        test: /\.ts$/,
        use: [
          'awesome-typescript-loader',
          'angular2-template-loader',
          'angular-router-loader'
        ],
        exclude: [/\.(spec|e2e)\.ts$/]
      }])
  },
  plugins: require('./webpack.plugins').concat([
    // Fix @angular/core/linker warning
    new webpack.ContextReplacementPlugin(
        /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
        path.join(__dirname, '..', 'src')
    )]),
  node: {
    global: true,
        crypto: 'empty',
        process: true,
        module: false,
        clearImmediate: false,
        setImmediate: false
  }
};
