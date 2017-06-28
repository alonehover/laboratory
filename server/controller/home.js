import Tag from '../model/Tag'

const Home = {
    init(router) {
        router.get('/', this.show),
        router.get('/api/tag/add', this.addTag),
        router.get('/test', this.test)
    },

    async show(ctx, next) {
        await ctx.render('index')
    },

    async addTag(ctx, next) {
        const tag_data = {
            name: "123",
            desc: "asdasd",
            url: "gvdsafasfa",
            type: "asdasd"
        };

        const tag = await new Tag(tag_data).save(function (err) {
            if (err) {
                console.log(err)
            } else {
                console.log('save success')
            }
        })

        ctx.body = tag
    },

    async test(ctx, next) {
        ctx.body = {
            msg: "asdas"
        }
    },
}

module.exports = Home
