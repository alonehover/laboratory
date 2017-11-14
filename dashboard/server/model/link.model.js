const dbQuery = require('../db/connect')

const _table = 'link'

exports.getAll = function(callback){
    return dbQuery('SELECT * FROM ?? ORDER BY ?? DESC', [_table, 'create_time']);
};

exports.add = function(params, callback) { 
    return dbQuery('insert into ??(name, url, category) values(?, ?, ?)', [_table, params.name, params.url, params.category])
}