const Link = require('../../model/link.model')
const Tool = require('../../tool')

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


const Url = {
    init(app) {
        app.get('/api/link/list', this.list),
        app.get('/api/link/group', this.groupList),
        app.post('/api/link/add', this.add),
        app.post('/api/link/del', this.del),
        app.post('/api/link/update', this.update)
    },

    add(req, res) {
        console.log(req.body);
        Link.add(req.body).then(status => {
            console.log(status);
            res.json(Response(req.body))
        }).catch(err => {
            console.error("err: " + err);
        })
    },

    list(req, res) {
        Link.getAll().then(data => {
            res.json(Response(data))
        }).catch(err => {
            console.error(err);
            res.json(Response("", 0, "数据库操作失败！"))
        })
    },

    groupList(req, res) {
        Link.getAll().then(data => {
            res.json(Response(groupBy(data)))
        }).catch(err => {
            console.error(err);
            res.json(Response("", 0, "数据库操作失败！"))
        })
    },

    del(req, res) {
        const id = req.body.id
        console.log(id);
        Link.del(id).then(data => {
            res.json(Response(""))
        }).catch(err => {
            console.error(err);
            res.json(Response("", 0, "数据库操作失败！"))
        })
    },

    update(req, res) {
        const params = req.body
        Link.update(params).then(status => {
            res.json(Response(""))
        }).catch(err => {
            console.error(err);
            res.json(Response("", 0, "数据库操作失败！"))
        })
    }
}

module.exports = Url
