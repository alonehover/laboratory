const Link = require('../model/link.model')
const Tool = require('../tool')

const { Response } = Tool

const Home = {
    init(app) {
        app.get('/', this.show)
    },

    show(req, res, next) {
        res.render('index')
    }
}

module.exports = Home
