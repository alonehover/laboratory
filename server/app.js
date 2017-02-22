'use strict'

var Koa = require('koa')
var server = require('koa-static')
var config = require('./config')
var router = require('./router')
const path = require('path')

var app = new Koa()

app.use(async (ctx, next) => {
    var start = new Date
    await next()
    var ms = new Date - start
    console.log('%s %s - %sms', ctx.method, ctx.url, ms);
})

app.use(server(path.join(__dirname, '..', 'app/build/public')))

router(app)

app.listen(config.port, function() {
    console.log("listen port " + config.port);
})

app.on('error', function(err) {
    console.log('server error', err)
})
