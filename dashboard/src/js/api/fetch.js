import axios from 'axios'
import qs from 'qs'

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
    return axios.post(HOST_URL + url, qs.stringify(params)).then(rs => rs.data).then(json => {
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

export {
    POST,
    GET
}
