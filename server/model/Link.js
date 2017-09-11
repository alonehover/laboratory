const dbQuery = require('../db/connect')

const _table = 'link'

exports.getAll = function(callback){
    dbQuery('SELECT * FROM ?? ORDER BY ?? DESC', [_table, 'create_time'],  function(err ,res) {
        if(err) {
            callback(err)
        }

        callback(null, res)
    });
};