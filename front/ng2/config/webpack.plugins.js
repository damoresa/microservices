'use strict'

const path = require('path');

const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const webpack = require('webpack');

module.exports = [
    //
    new webpack.LoaderOptionsPlugin({
        options: {
            context: path.join(__dirname, '..', 'src'),
            output: {
                path: path.join(__dirname, '..', '..', 'src', 'main', 'resources', 'public')
            },
            postcss: [
                autoprefixer
            ]
        }
    }),

    //
    new HtmlWebpackPlugin({
        template: 'src/index.html',
        chunksSortMode: 'dependency',
        xhtml: true
    }),

    //
    new webpack.optimize.CommonsChunkPlugin({
        name: 'polyfills',
        chunks: ['polyfills']
    }),

    //
    new webpack.optimize.CommonsChunkPlugin({
        name: 'twbs',
        chunks: ['twbs']
    }),

    // Enable tree shaking of vendor
    new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            chunks: ['vendor'],
            minChunks: function(module) { return module.context && module.context.indexOf('node_modules') !== -1; }
    }),

    //
    new webpack.optimize.CommonsChunkPlugin({
        name: 'app',
        chunks: ['app']
    }),

    //
    new webpack.optimize.CommonsChunkPlugin({
        name: ['polyfills', 'twbs', 'vendor', 'app'].reverse()
    }),

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

    //
    new ExtractTextPlugin('[name].[contenthash].css'),

    //
    new CopyWebpackPlugin([
        { from: 'src/mocks/', to: 'mocks/' },  // Mocks
        { from: 'src/thin2', to: '' }  // Config service mock
    ], {
        // By default, we only copy modified files during a watch or webpack-dev-server build.
        // Setting this to `true` copies all files.
        copyUnmodified: false
    })
];
