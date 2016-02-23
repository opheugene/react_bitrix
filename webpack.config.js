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
        })

    ]

};