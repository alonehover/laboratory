var fs = require('fs')
var router = require('koa-router')()

var routers = function(app) {
    var FS_CONTROLLER_PATH = __dirname + '/controller/'
    fs.readdir(FS_CONTROLLER_PATH, function(err, file) {
        if(err) {
            throw err
        }
        for(var e; file.length && (e = file.shift());) {
            var service = require(FS_CONTROLLER_PATH + e)
            service.init && service.init(router)
        }
    })

    app.use(router.routes())
}

module.exports = routers
