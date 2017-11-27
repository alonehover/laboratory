const Tool = require('../tool')

const { Response } = Tool

const Play = {
    init(app) {
        app.get('/play', this.show)
    },

    async show(req, res, next) {
        res.render('play', {
            title: "Play"
        })
    }
}

module.exports = Play
