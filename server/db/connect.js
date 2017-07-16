const mongoose = require('mongoose')

mongoose.Promise = global.Promise;
// 连接字符串格式为mongodb://主机/数据库名
mongoose.connect('mongodb://localhost/laboratory');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log.bind(console, 'mongo sql connection success');
});

module.exports = mongoose
