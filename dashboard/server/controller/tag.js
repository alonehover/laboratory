const Link = require('../model/link.model')
const Tool = require('../tool')

const { Response } = Tool

const Home = {
    init(app) {
        // app.get('/api/tag', this.tagList),
        // app.post('/api/tag/add', this.addTag),
        app.get('/api/tag', this.show)
    },

    show(req, res) {
        Link.getAll(function(err, data) {
            res.json(Response(data))
        })
    }
}

module.exports = Home
