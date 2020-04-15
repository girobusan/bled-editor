const path = require('path');
const webpack = require('webpack');
const pkg = require('./package.json')
//const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const env = process.env.NODE_ENV
const econfig = {
    mode: env || 'development'
 }

//var watchornot = (this.mode=="development");

module.exports =  (env, argv) =>( {
    watch: argv.mode != 'production',
    target: 'web',    

    mode: "development",
    entry: {
        "blocked": './src/bled/blockeditor.js',
        "tests" : "./src/bled/testing.js",
        "presentation" : "./src/bled/presentation.js"
        //"styles/preview" : "./src/styles/preview.less"
         //"styles/site" : "./src/styles/site.less"
    }, //array!!!
    devtool: argv.mode !="production" ? 'inline-source-map' : "",
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
                test: /\.(less|css)$/,
                use: [
                   // MiniCssExtractPlugin.loader,
                  {loader: 'style-loader',
                  options: {
                    //insert: '.block_editor_outer_container',
                    //injectType: 'lazyStyleTag' 
                  }
                 } ,
                  'css-loader',
                    
                ],
            },
            {
                test: /\.(woff|ttf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: { name: 'fonts/[name].[ext]' }
                    }
                    //'css-loader', 
                    //'less-loader'
                ],
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