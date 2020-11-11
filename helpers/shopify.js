// Shopify Helpers
const axios = require('axios')
const rateLimit = require('axios-rate-limit')

// Helpers
const { base_url } = require('./config')
const { get } = require('./rest')
const {
  removeDuplicateStrings,
  combineArrayOfArrays
} = require('./array')


const http = rateLimit(axios.create(), { maxRequests: 2, perMilliseconds: 1000, maxRPS: 2 })
http.getMaxRPS()

const get_all_tags = async () => {
  let uniqueTags = await get(base_url + `/admin/api/2020-07/products.json?limit=250`).then(resp => {
    return resp.products.map((product, index) => removeDuplicateStrings(product.tags.split(', '))).filter(tags => tags != undefined && tags.length > 0)
  }).catch(error => error);
  
  uniqueTags = combineArrayOfArrays(uniqueTags)
  uniqueTags = removeDuplicateStrings(uniqueTags)

  return uniqueTags
}

module.exports = {
  get_all_tags
}
