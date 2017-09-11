'use strict'

const express = require('express')
const router = require('./router')
const path = require('path')
const config = require('./config')

const app = express()

router(app)

app.use(express.static(path.join(__dirname, '..', 'app/public')))
app.set('views', path.join(__dirname, '..', 'app/view')); // specify the views directory
app.set('view engine', 'ejs'); // register the template engine

app.listen(config.port, function () {
    console.log('Example app listening on port 3000!')
})

app.on('error', function(err) {
    console.log('server error', err)
})
