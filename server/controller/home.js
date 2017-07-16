const Tag = require('../model/Tag')
const Tool = require('../tool')

const { Response } = Tool

const getAllList = async () => {
    const list = await Tag.aggregate([
        {
            $group: {
                _id:"$type",
                list: {$push: {name: "$name", desc: "$desc", url: "$url"}},

            }
        },
        {
            $project : {
                list: "$list"
            },
        }
    ])

    return list
}

const Home = {
    init(router) {
        router.get('/api/tag', this.tagList),
        router.post('/api/tag/add', this.addTag),
        router.get('/*', this.show)
    },

    async show(ctx, next) {
        const list = await Tag.find()
        await ctx.render('index')
    },

    async tagList(ctx, next) {
        const list = await getAllList()
        ctx.body = Response(list ? list : [])
    },

    async addTag(ctx, next) {
        const request = ctx.request.body

        const tag_data = {
            name: request.name,
            desc: request.desc,
            url: request.url,
            type: request.type
        };

        const tag = await new Tag(tag_data).save()

        if(tag) {
            const list = await getAllList()
            ctx.body = Response(list ? list : [])
        }
    }
}

module.exports = Home
