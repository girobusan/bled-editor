const path = require('path');
const webpack = require('webpack');
const pkg = require('./package.json')
//const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const env = process.env.NODE_ENV
const econfig = {
    mode: env || 'development'
}

//var watchornot = (this.mode=="development");

module.exports = (env, argv) => ({
    watch: argv.mode != 'production',
    target: 'web',

    mode: "development",
    entry: {
        "blocked": './src/bled/blockeditor.js',
        "tests": "./src/bled/testing.js",
        "presentation": "./src/bled/presentation.js"
        //"styles/preview" : "./src/styles/preview.less"
        //"styles/site" : "./src/styles/site.less"
    }, //array!!!
    devtool: argv.mode != "production" ? 'inline-source-map' : "",
    output: {
        filename: '[name].js',
        path: argv.mode == 'production' ? path.resolve(__dirname, 'out') : path.resolve(__dirname, 'webtest')
    },

    module: {
        rules: [
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },

            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',

                ],
            },
            {
                test: /\.(png|gif|woff|woff2|eot|ttf)$/,
                loader: 'url-loader?limit=50000',
            }
        ]

    },
    plugins: [
        new webpack.DefinePlugin({
            // Definitions...
            'VERSION': JSON.stringify(pkg.version)
        })


    ],
});
