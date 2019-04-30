import axios from 'axios';
let API = {};
API.getBaseURL = function () {
    // return '' //服务器地址
}

//封装http get请求
API.httpGet = function (url, data) {
    if (!data) data = {};
    data.t = Date.parse(new Date());
    return axios({
        method: 'get',
        url: url,
        params: data,
        baseURL: API.getBaseURL(),
        withCredentials: true,
    }).then(json => {
        return json.data;
    });
}

//封装http post请求
API.httpPost = function (url, data) {
    if (!data) data = {};
    data.t = Date.parse(new Date());
    return axios({
        method: 'post',
        url: url,
        headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        params: data,
        withCredentials: true,
        baseURL: API.getBaseURL()
    }).then(json => {
        return json.data;
    });
}

//封装http json格式的post请求
API.httpPostWithJson = function (url, data) {
    if (!data) data = {};
    data.t = Date.parse(new Date());
    return axios({
        method: 'post',
        url: url,
        headers: {
            'Content-type': 'application/json;charset=UTF-8'
        },
        data: data,
        withCredentials: true,
        baseURL: API.getBaseURL()
    }).then(json => {
        return json.data;
    });
}

//封装http put请求
API.httpPut = function (url, data) {
    if (!data) data = {};
    data.t = Date.parse(new Date());
    return axios.put(url, data).then(json => {
        return json.data;
    });
}

export default API;
