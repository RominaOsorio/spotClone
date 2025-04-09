/* eslint-disable camelcase */
'use strict'

const axios = require('axios')

const apiConfig = require('./api.config')

const token = axios.create({
  baseURL: apiConfig.TOKEN_BASE_URL,
  headers: {
    Authorization: `Basic ${(Buffer.from(apiConfig.CLIENT_ID + ':' + apiConfig.CLIENT_SECRET).toString('base64'))}`,
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

// console.log('TOKEN_BASE_URL:', apiConfig.TOKEN_BASE_URL)

const api = axios.create({ baseURL: apiConfig.BASE_URL })

const getData = async (apiUrl, access_token) => {
  try {
    const response = await api.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    })
    return response
  } catch (err) {
    console.error('Error en getData():', err.response?.data || err.message)
    throw err
  }
}

module.exports = {
  token,
  getData
}
