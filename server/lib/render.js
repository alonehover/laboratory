'use strict'

const views = require('co-views')
const path = require('path')

module.exports = views(path.join(__dirname, '/../../app/build'), {
    map: {html: 'swig'}
})