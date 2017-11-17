const Link = require('../model/link.model')
const Tool = require('../tool')

const { Response } = Tool

const groupBy = data => {
    const obj = {}
    let result = []

    for (const val of data) {
        if(!obj[val.category]) {
            obj[val.category] = [val]
        }else {
            obj[val.category].push(val)
        }
    }

    for (const key in obj) {
        var item = {}
        if (obj.hasOwnProperty(key)) {
            item.name = key
            item.val = obj[key]
            result.push(item);
        }
    }

    return result
}

const Home = {
    init(app) {
        app.get('/', this.show)
    },

    async show(req, res, next) {
        var list = await Link.getAll()
        var group = groupBy(list)
        res.render('link', {
            title: "Link",
            links: group
        })
    }
}

module.exports = Home
