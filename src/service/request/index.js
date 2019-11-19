import instance from "../interface-config";






function commonRequest(url, method = 'get', params) {

    return instance({
        url,
        method,
        [(method.toLocaleLowerCase()) === 'post' ? 'data' : 'params']: params
    })
}

export {
    commonRequest
}





