const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, "../src/js/app.js"),
    output: {
        path: path.resolve(__dirname, "../app/public/admin/js"),
        publicPath: "/js/",
        filename: "app.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: path.resolve(__dirname, "../src"),
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1
                            }
                        },
                        {
                            loader: 'postcss-loader'
                        },
                        "less-loader"
                    ]
                })
            },
            {
                test: /\.(gif|jpg|png|woff|woff2|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=80000'
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({ // 压缩js
            compress: {
                warnings: false
            },
            output: {
                comments: false  // remove all comments
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new ExtractTextPlugin('../css/style.css'),
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, "../app/view/admin/index.ejs"),
            template: "./src/tpl/index.prod.html"
        })
    ]
}
