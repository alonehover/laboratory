const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const OpenBrowserPlugin = require("open-browser-webpack-plugin");

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, "../public"),
        compress: true,
        hot: true,
        port: 8080
    },
    entry: path.resolve(__dirname, "../src/js/app.js"),
    output: {
        path: path.resolve(__dirname, "../app/public/js"),
        publicPath: "http://localhost:8080/js/",
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
                test: /\.scss$/,
                include: path.resolve(__dirname, "../src"),
                loader: "style-loader!css-loader!sass-loader"
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
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserPlugin({
            url: "http://localhost:8081"
        }),
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, "../app/view/index.html"),
            template: "../src/tpl/index.dev.html"
        }),
    ]
}
