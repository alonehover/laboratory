var render = require('../lib/render')

var Home = {
    init(router) {
        router.get('/', this.show),
        router.get('/get', this.page)
    },

    async show(ctx, next) {
        ctx.response.body = {
            msg: "asdas"
        }
    },

    async page(ctx, next) {
        ctx.response.body = await render('index')
    }
}

module.exports = Home