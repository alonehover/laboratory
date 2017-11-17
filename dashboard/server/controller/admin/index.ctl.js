const Link = require('../model/link.model')
const Tool = require('../tool')

const { Response } = Tool

const Admin = {
    init(app) {
        app.get('/admin', this.show)
    },

    show(req, res, next) {
        res.render('admin.index')
    }
}

module.exports = Admin