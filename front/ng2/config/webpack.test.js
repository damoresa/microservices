'use strict';

const path = require('path');
const webpack = require('webpack');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');

module.exports = {
    devtool: 'inline-source-map',

    resolve: {
        extensions: ['.ts', '.js'],
        modules: [
          path.join(__dirname, '..', 'src'),
          path.join(__dirname, '..', 'node_modules')
        ]
    },

    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                use: 'source-map-loader',
                exclude: [
                    // these packages have problems with their sourcemaps
                    path.resolve('node_modules/rxjs'),
                    path.resolve('node_modules/@angular')
                ]
            },

            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'awesome-typescript-loader',
                        query: {
                            // use inline sourcemaps for "karma-remap-coverage" reporter
                            sourceMap: false,
                            inlineSourceMap: true,
                            compilerOptions: {

                                // Remove TypeScript helpers to be injected
                                // below by DefinePlugin
                                removeComments: true

                            }
                        },
                    },
                    'angular2-template-loader'
                ],
                exclude: [/\.e2e\.ts$/]
            },

            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                include: path.join(__dirname, '..', 'src', 'styles')
            },

            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                include: path.join(__dirname, '..', 'src', 'styles')
            },

            { test: /\.html$/, use: 'html-loader?minimize=false&' + JSON.stringify({attrs: ['img:src']}) },

            // -------------------------------------------------------------------
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: "url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]"
            },

            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: "url-loader?limit=10000&name=fonts/[name].[ext]"
            },

            {
                test: /\.(jpe?g|png|gif)$/i,
                use: 'file-loader?name=images/[name].[ext]'
            },

            {
                test: /bootstrap\/dist\/js\/umd\//,
                use: 'imports-loader?jQuery=jquery'
            },

            {
                test: /\.(js|ts)$/,
                enforce: 'post',
                use: 'istanbul-instrumenter-loader',
                include: path.join(__dirname, '..', 'src'),
                exclude: [
                    /\.(e2e|spec)\.ts$/,
                    /node_modules/
                ]
            }
        ]
    },

    plugins: [
        // fix the warning in ./~/@angular/core/src/linker/system_js_ng_module_factory_loader.js
        new ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            path.join(__dirname, '..', 'src')
        ),

        //
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            Tether: "tether",
            "window.Tether": "tether",
            Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
            Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
            Button: "exports-loader?Button!bootstrap/js/dist/button",
            Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
            Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse",
            Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
            Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
            Popover: "exports-loader?Popover!bootstrap/js/dist/popover",
            Scrollspy: "exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
            Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
            Util: "exports-loader?Util!bootstrap/js/dist/util"
        }),

        new LoaderOptionsPlugin({
            debug: true,
            options: {
                tslint: {
                    emitErrors: false,
                    failOnHint: false,
                    resourcePath: 'src'
                },

            }
        })
    ],
    node: {
      global: true,
      process: false,
      crypto: 'empty',
      module: false,
      clearImmediate: false,
      setImmediate: false
    }
};
