const Link = require('../model/link.model')
const Tool = require('../tool')

const { Response } = Tool

const Home = {
    init(app) {
        // app.get('/api/tag', this.tagList),
        // app.post('/api/tag/add', this.addTag),
        app.get('/', this.show)
    },

    show(req, res, next) {
        console.log("object");
        res.render('index')
    }
}

module.exports = Home
