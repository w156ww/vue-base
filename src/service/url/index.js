import {devUrl, prodUrl} from "./url";

const getBaseUrl = function () {
    const env = process.env.NODE_ENV;
    return env === 'development' ? devUrl.apiUrl : prodUrl.apiUrl
};



export default getBaseUrl



