'use strict'

const axios = require('axios')
// const querystring = require('querystring')

const apiConfig = require('./api.config')

const token = axios.create({
  baseURL: apiConfig.TOKEN_BASE_URL,
  headers: {
    Authorization: `Basic ${(Buffer.from(apiConfig.CLIENT_ID + ':' + apiConfig.CLIENT_SECRET).toString('base64'))}`,
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

console.log('TOKEN_BASE_URL:', apiConfig.TOKEN_BASE_URL)

module.exports = {
  token
}
