'use strict'

const apiConfig = require('../config/api.config')
const axiosConfig = require('../config/axios.config')

const getToken = async (code) => {
  try {
    const response = await axiosConfig.token.post('/token', {
      grant_type: 'authorization_code',
      code,
      redirect_uri: apiConfig.REDIRECT_URI
    })
    return response
  } catch (err) {
    console.error('Error obteniendo token:', err.response?.data || err.message)
    throw err
  }
}

module.exports = {
  getToken
}
