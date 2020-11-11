// Rest api helper functions
const axios = require('axios')
const btoa = require('btoa')
const { key } = require('./config')
const rateLimit = require('axios-rate-limit')
const http = rateLimit(axios.create(), { maxRequests: 2, perMilliseconds: 1000, maxRPS: 2 })
http.getMaxRPS() 

const get = (url) => http({
    method: 'GET',
    url: url,
    credentials: 'same-origin',
    redirect: 'follow',
    agent: null,
    headers: {
        "Content-Type": "text/plain",
        'Authorization': 'Basic ' + btoa(key)
    }
}).then((response) => {
    return response.data
}).catch(error => error);

const post = (url, data) => http({
    method: 'POST',
    url: url,
    credentials: 'same-origin',
    redirect: 'follow',
    agent: null,
    data: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json",
        'Authorization': 'Basic ' + btoa(key)
    }
}).then((response) => {
    return response
}).catch(error => error);

const put = (url, data) => http({
    method: 'PUT',
    url: url,
    credentials: 'same-origin',
    redirect: 'follow',
    agent: null,
    data: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json",
        'Authorization': 'Basic ' + btoa(key)
    }
}).then((response) => {
    return response
}).catch(error => error);

module.exports = {
    get,
    post,
    put
}