const fs = require('fs')
const path = require('path')

var routers = function(app) {
    var FS_CONTROLLER_PATH = path.join(__dirname, '/controller/')

    var mapFiles = function(dirPath) {
        fs.readdirSync(dirPath).forEach(function(name){
            var file = path.join(dirPath, name)
    
            if(fs.statSync(file).isDirectory()) {
                mapFiles(file)
                return ;
            }
    
            var obj = require(file)
            obj.init && obj.init(app)
        })
    }

    mapFiles(FS_CONTROLLER_PATH)
}

module.exports = routers
