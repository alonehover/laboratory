import { GET, POST } from "./fetch"

const API = {
    linkList: () => {
        return GET("api/link/list")
    },

    addLink: (params) => {
        return POST("api/link/add", params)
    }
}

export default API