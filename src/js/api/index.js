import axios from 'axios'
import querystring from 'querystring'

const HOST_URL = "/"

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const GET = (url, params) => {
    return axios.get(HOST_URL + url, {params}).then(rs => rs.data).then(json => {
        if(json.code === 1) {
            return json.data
        }

        return Promise.reject(json.message)
    }).catch(err => {
        if(typeof err === "string") {
            console.error("api error : " + err)
        }else {
            console.error("api error : 接口请求失败")
        }
    })
}

const POST = (url, params) => {
    return axios.post(HOST_URL + url, querystring.stringify(params)).then(rs => rs.data).then(json => {
        if(json.code === 1) {
            return json.data
        }

        return Promise.reject(json.message)
    }).catch(err => {
        if(typeof err === "string") {
            console.error("api error : " + err)
        }else {
            console.error("api error : 接口请求失败")
        }
    })
}

const API = {
    tagList: () => {
        return GET("api/tag")    
    },

    addTag: (params) => {
        console.log(params);
        return POST("api/tag/add", params)
    }
}

export default API
