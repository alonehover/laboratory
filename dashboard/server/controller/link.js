const Link = require('../model/link.model')
const Tool = require('../tool')

const { Response } = Tool

const Url = {
    init(app) {
        app.get('/api/link/list', this.list),
        // app.post('/api/tag/add', this.addTag),
        app.post('/api/link/add', this.add)
    },

    add(req, res) {
        console.log(req.body);
        Link.add(req.body).then(status => {
            console.log(status);
            res.json(Response(req.body))
        }).catch(err => {
            console.log("err: " + err);
        })
    },

    list(req, res) {
        Link.getAll().then(data => {
            res.json(Response(data))
        }).catch(err => {
            console.log(err);
        })
        
    }
}

module.exports = Url
