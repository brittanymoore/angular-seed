var webpack = require('webpack');
var path = require('path');
var webpackMerge = require('webpack-merge');

// common config
var common = require('./webpack.common');

// constants
const ENV = process.env.NODE_ENV = process.env.ENV = 'development';
const API_URL = process.env.API_URL = common.apiUrl;
const USE_MOCK = process.env.USE_MOCK = true;

var webpackConfig = {

    output: {
        path: path.resolve(__dirname, './../dev'),
    },

    devtool: 'inline-source-map', 

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(ENV),
                'API_URL': JSON.stringify(API_URL),
                'USE_MOCK': JSON.stringify(USE_MOCK)
            }
        })
    ],

    devServer: {
        contentBase: './dev'
    }

};

module.exports = webpackMerge(common.config, webpackConfig);