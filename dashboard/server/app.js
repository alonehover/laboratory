'use strict'

const express = require('express')
const router = require('./router')
const path = require('path')
const config = require('./config')

const webpackMiddleware = require("webpack-dev-middleware")
const webpackConfig = require("../webpack.dev.config")

const app = express()

router(app)

app.use(express.static(path.join(__dirname, '..', 'app/public')))
app.set('views', path.join(__dirname, '..', 'app/view')); // specify the views directory
app.set('view engine', 'ejs'); // register the template engine

app.use(webpackMiddleware(webpackConfig))

app.listen(config.port, function () {
    console.log('Example app listening on port 3000!')
})

app.on('error', function(err) {
    console.log('server error', err)
})
