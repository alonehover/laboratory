'use strict'

const express = require('express')
const router = require('./router')
const path = require('path')
const config = require('./config')
const bodyParser = require('body-parser');

const webpack = require('webpack')
const webpackDevMiddleware = require("webpack-dev-middleware")
const webpackHotMiddleware = require("webpack-hot-middleware")
const webpackConfig = require("../webpack/webpack.dev.config")
const compiler = webpack(webpackConfig)

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '..', 'app/public')))
app.set('views', path.join(__dirname, '..', 'app/view')); // specify the views directory
app.set('view engine', 'ejs'); // register the template engine

router(app)

app.use(webpackDevMiddleware(compiler, {
    publicPath: "/js/"
}))
app.use(webpackHotMiddleware(compiler));

app.listen(config.port, function () {
    console.log('Example app listening on port 3000!')
})

app.on('error', function(err) {
    console.log('server error', err)
})
