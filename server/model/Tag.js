const mongoose = require('../db/connect')

const Schema = mongoose.Schema;

const Tag = mongoose.model('Tag', new Schema({
    name: String,
    desc: String,
    url: String,
    type: String
}));

module.exports = Tag
