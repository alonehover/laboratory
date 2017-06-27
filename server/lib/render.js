'use strict'

const views = require('co-views')
const path = require('path')

module.exports = views(path.join(__dirname, '/../../app/tpl'), {
    map: {html: 'ejs'}
})
