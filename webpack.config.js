const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: [
	'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
        path.resolve(__dirname, 'src/js/jquery-3.2.1.js'),
        path.resolve(__dirname, 'src/sass/style.scss'),
        path.resolve(__dirname, 'src/js/app.js'),
        path.resolve(__dirname, 'src/index.jade'),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [{ 
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
                loader: 'css-loader?importLoaders=1',
            }),
        },{
            test: /\.(sass|scss)$/,
            loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },
      {
        test: /\.jade$/,
        loader: 'jade-loader'
      }]
    },
    plugins: [
        new ExtractTextPlugin('app.bundle.css'),
        new HtmlWebpackPlugin({
            template: './src/index.jade',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/login.jade',
            filename: 'login.html'
        }),
        new CopyWebpackPlugin([
            { from: './assets/**/*', to: path.resolve(__dirname, 'dist/') }
        ]),
    ]
};
