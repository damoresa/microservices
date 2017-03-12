const path = require('path');

const AotPlugin = require('@ngtools/webpack').AotPlugin;
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

module.exports = {
  devtool: 'source-map',
  entry: require('./webpack.entry'),
  output: require('./webpack.output'),
  resolve: require('./webpack.resolve'),
  module: {
    rules: require('./webpack.rules').concat([
      // -------------------------------------------------------------------
      {
        test: /\.ts$/,
        use: '@ngtools/webpack'
      }])
  },
  plugins: require('./webpack.plugins').concat([

    //
    new AotPlugin({
      tsConfigPath: path.join(__dirname, '..', 'tsconfig-build.json'),
      entryModule: path.join(__dirname, '..', 'src', 'app', 'app.module#AppModule')
    }),

    //
    new UglifyJsPlugin({
      // beautify: true, //debug
      // mangle: false, //debug
      // dead_code: false, //debug
      // unused: false, //debug
      // deadCode: false, //debug
      // compress: {
      //   screw_ie8: true,
      //   keep_fnames: true,
      //   drop_debugger: false,
      //   dead_code: false,
      //   unused: false
      // }, // debug
      // comments: true, //debug


      beautify: false, //prod
      output: {
        comments: false
      }, //prod
      mangle: {
        screw_ie8: true
      }, //prod
      compress: {
        screw_ie8: true,
        warnings: false,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
        negate_iife: false // we need this for lazy v8
      }
    })]),
  node: {
    global: true,
    crypto: 'empty',
    process: false,
    module: false,
    clearImmediate: false,
    setImmediate: false
  }

};
