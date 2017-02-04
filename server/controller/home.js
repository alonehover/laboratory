var Home = {
    init(router) {
        router.get('/', this.show)
    },

    async show(ctx, next) {
        ctx.response.body = {
            msg: "asdas"
        }
    }
}

module.exports = Home