var render = require('../lib/render')

var Home = {
    init(router) {
        router.get('/', this.show),
        router.get('/get', this.page)
        router.get('/signUp', this.signUp)
    },

    async show(ctx, next) {
        ctx.response.body = {
            msg: "asdas"
        }
    },

    async page(ctx, next) {
        ctx.response.body = await render('index')
    },

    async signUp(ctx, next) {
        ctx.response.body = await render('account/signUp')
    }
}

module.exports = Home
