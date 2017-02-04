'use strict'

var Koa = require('koa')
var config = require('./config')
var router = require('./router')

var app = new Koa()

app.use(async (ctx, next) => {
    var start = new Date
    await next()
    var ms = new Date - start
    console.log('%s %s - %sms', ctx.method, ctx.url, ms);
})

router(app)

app.listen(config.port, function() {
    console.log("listen port " + config.port);
})

app.on('error', function(err) {
    console.log('server error', err)
})