'use strict'

const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
    // -------------------------------------------------------------------
    {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader'
        }),
        include: path.join(__dirname, '..', 'src', 'styles')
    },

    // -------------------------------------------------------------------
    {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader!sass-loader'
        }),
        include: path.join(__dirname, '..', 'src', 'styles')
    },

    // -------------------------------------------------------------------
    {
        test: /bootstrap\/dist\/js\/umd\//,
        use: {
            loader: 'imports-loader',
            options: {
                jQuery: 'jquery'
            }
        }
    },

    // -------------------------------------------------------------------
    {
        test: /\.html$/,
        use: {
            loader: 'html-loader',
            options: {
                minimize: false,
                attrs: ['img:src']
            }
        }
        // If we exclude the index from this loader, HtmlWebpackPlugin manages it and attempts to
        // process Thymeleaf's variable syntax.
        //exclude: path.join(__dirname, '..', 'src', 'index.html')
    },

    // -------------------------------------------------------------------
    {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: {
            loader: "url-loader",
            options: {
                limit: 1000,
                mimetype: 'application/font-woff',
                name: 'fonts/[hash].[ext]'
            }
        }
    },
    {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: {
            loader: "url-loader",
            options: {
                limit: 1000,
                name: 'fonts/[hash].[ext]'
            }
        }
    },

    // -------------------------------------------------------------------
    {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: 'images/[hash].[ext]',
                    publicPath: '/front-service/'
                }
            },
            {
                loader: 'image-webpack-loader',
                query: {
                    progressive: true,
                    pngquant: {
                        optimizationLevel: 7,
                        interlaced: false,
                        quality: '65-90',
                        speed: 4
                    }
                }
            }
        ]
    }
];
