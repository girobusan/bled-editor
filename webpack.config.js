const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
                    {
                        loader: 'css-loader',
                        options: { url: false }
                    },
                    'less-loader'
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
        /*
        new MiniCssExtractPlugin(
            {
                filename: '[name].css',
                inject: false
            }
        ),
        
        
        new HtmlWebpackPlugin({
            
            chunks: ["blocked"],
            filename: '../index.html',            
            inject: "body"
          
        }),*/


    ],
});