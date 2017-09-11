const fs = require('fs')
const path = require('path')

var routers = function(app) {
    var FS_CONTROLLER_PATH = path.join(__dirname, '/controller/')

    fs.readdir(FS_CONTROLLER_PATH, function(err, file) {
        if(err) {
            throw err
        }

        for(var e; file.length && (e = file.shift());) {
            var service = require(FS_CONTROLLER_PATH + e)
            service.init && service.init(app)
        }
    })
}

module.exports = routers
