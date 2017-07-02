var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: {
        index: [
            './app/index.jsx',
            'webpack-dev-server/client?http://localhost:8080/'
        ]
    },
    output: {
        path: './dist',
        filename: '[name].js'
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {

        loaders: [
            //单独css
            { test: /\.css$/, loader: ExtractTextWebpackPlugin.extract({ use: "style-loader", ues: "css-loader" }) },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            //提供html内嵌的imgurl支持
            { test: /\.html$/, loader: 'html-withimg-loader' },
            { test: /\.(png|gif|jpg|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=8192&name=/resource/[name].[ext]' }
            // { test: /\.less/, loader: 'style-loader!css-loader!less-loader'}
        ]
    },
    // externals: {
    //     'react': 'React'
    // },
    plugins: [
        //提取公共模块
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'js/base.js'
        }),
        //单独打包css
        new ExtractTextWebpackPlugin(
            'css/[name].css'),
        //html模板插件
        new HtmlWebpackPlugin({
            template: './app/index.tmpl.html',
            filename: 'index.html',
            inject: true,
            hash: true,
            chunks: ['commons', 'index']
        })
    ],
    // devServer: {
    //     port: 8080,
    //     inline: true
    // }

}