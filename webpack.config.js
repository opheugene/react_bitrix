'use strict';

var NODE_ENV = process.env.NODE_ENV || 'development';
var path = require('path');
var webpack = require('webpack');

module.exports = {

    entry: './src/main.jsx',
    output: {
        path: __dirname + "/js/",
        filename: 'build.js',
        library: 'app'
    },

    devtool: NODE_ENV == 'development' ? 'cheap-inline-module-source-map' : null,

    watch: NODE_ENV == 'development',
    watchOptions: {
        aggregateTimeout: 100
    },

    module: {
        loaders: [

            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file"
            },
            {
                test: /\.(woff|woff2)$/,
                loader:"url?prefix=font/&limit=5000"
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/octet-stream"
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=image/svg+xml"
            }

        ]
    },

    plugins: [

        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery"
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        //new webpack.optimize.UglifyJsPlugin({
        //    mangle: false,
        //    sourcemap: false
        //})

    ]

};