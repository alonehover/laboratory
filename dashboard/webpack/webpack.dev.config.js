const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const OpenBrowserPlugin = require("open-browser-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devtool: "cheap-module-eval-source-map",
    context: path.resolve(__dirname, ".."), // entry配置项的根目录（绝对路径）
    entry: {
        app: [
            "./src/js/app",
            "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=10000"
        ]
    },
    output: {
        path: path.resolve(__dirname, "../app/public/js/"),
        publicPath: "/js/",
        filename: "[name].js"
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
                include: path.resolve(__dirname, "../src"),
                loader: "style-loader!css-loader!less-loader"
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
        // new OpenBrowserPlugin({
        //     url: "http://localhost:8081"
        // }),
        // new CopyWebpackPlugin([
        //     {
        //         from: path.resolve(__dirname, "../src/tpl/index.dev.html"),
        //         to: path.resolve(__dirname, "../app/view/index.ejs"),
        //         force: true
        //     }
        // ]),
        new webpack.HotModuleReplacementPlugin()

        // new HtmlWebpackPlugin({
        //     filename: "../../view/index.html",
        //     template: "./src/tpl/index.dev.html"
        // }),
    ]
}
