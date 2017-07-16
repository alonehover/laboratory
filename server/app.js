'use strict'
const Koa = require('koa')
const server = require('koa-static')
const config = require('./config')
const router = require('./router')
const path = require('path')
const views = require('koa-views')
const bodyParser = require('koa-bodyparser');

let app = new Koa()

app.use(bodyParser())

app.use(async (ctx, next) => {
    const start = new Date
    await next()
    const ms = new Date - start
    console.log('%s %s - %sms', ctx.method, ctx.url, ms);
})

app.use(server(path.join(__dirname, '..', 'app/public')))
app.use(views(path.join(__dirname, '..', 'app/view'), { map: {html: 'ejs'} }))

router(app)

app.listen(config.port, function() {
    console.log("listen port " + config.port);
})

app.on('error', function(err) {
    console.log('server error', err)
})
