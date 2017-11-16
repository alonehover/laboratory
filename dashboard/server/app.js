'use strict'

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');

const webpack = require('webpack')
const webpackDevMiddleware = require("webpack-dev-middleware")
const webpackHotMiddleware = require("webpack-hot-middleware")
const webpackConfig = require("../webpack/webpack.dev.config")
const compiler = webpack(webpackConfig)

const config = require('./config')

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '..', 'app/public')))
app.set('views', path.join(__dirname, '..', 'app/view')); // specify the views directory
app.set('view engine', 'ejs'); // register the template engine

app.all('*', function (req, res, next) {  
    res.header("Access-Control-Allow-Origin", "*");//允许的域名（ * 所有域）  
    next();  
});

require('./router')(app)

app.use(webpackDevMiddleware(compiler, {
    publicPath: "/js/"
}))

app.use(webpackHotMiddleware(compiler));

app.listen(config.port, function () {
    console.log('Example app listening on port ' + config.port + '!')
})

app.use(function (req, res, next) {
    res.status(400).render("404")
});

app.on('error', function(err) {
    console.log('server error', err)
})
