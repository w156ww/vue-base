import axios from 'axios';
import getBaseUrl from "./url";


const instance = axios.create({
    baseURL: getBaseUrl(),
    timeout: 1000 * 60
});

// 请求拦截
instance.interceptors.request.use(function (config) {
    // 处理
    return config;
}, function (error) {
    // 处理
    return Promise.reject(error);
});

// 响应拦截
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    console.log('response::', response);
    return response;
}, function (error) {
    console.log('error response::', error.response);
    const res = error.response;
    if (res) {
        switch (res.status) {
            case 404:
                return Promise.reject(404);
        }
    }
    // 对响应错误做点什么
    return Promise.reject(error);
});








export default instance





