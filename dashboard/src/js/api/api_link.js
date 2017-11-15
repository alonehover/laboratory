import { GET, POST } from "./fetch"

const API = {
    linkList: () => {
        return GET("api/link/list")
    },

    addLink: params => {
        return POST("api/link/add", params)
    },

    removeLink: params => {
        return POST("api/link/del", {
            id: params
        })
    },

    updateLink: params => {
        return POST("api/link/update", {
            id: params.id,
            name: params.name,
            url: params.url,
            category: params.category
        })
    }
}

export default API