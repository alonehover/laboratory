var render = require('../lib/render')

var Home = {
    init(router) {
        router.get('/', this.show),
        router.get('/test', this.test)
        router.get('/signUp', this.signUp)
    },

    async show(ctx, next) {
        ctx.response.body = await render('home/index')
    },

    async test(ctx, next) {
        ctx.response.body = {
            msg: "asdas"
        }
    },

    async signUp(ctx, next) {
        ctx.response.body = await render('account/signUp')
    }
}

module.exports = Home
