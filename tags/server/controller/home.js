const Link = require('../model/Link')
const Tool = require('../tool')

const { Response } = Tool

const Home = {
    init(app) {
        // app.get('/api/tag', this.tagList),
        // app.post('/api/tag/add', this.addTag),
        app.get('/*', this.show)
    },

    show(req, res) {
        Link.getAll(function(err, data) {
            console.log(data);

            res.render('tag/index', {list: data})
        })
    }
}

module.exports = Home
