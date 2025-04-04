'use strict'

require('dotenv').config()

const BASE_URL = 'https://api.spotify.com/v1'

// Spotify authentication token

const TOKEN_BASE_URL = 'https://accounts.spotify.com/api'

// Spotify client

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const REDIRECT_URI = process.env.REDIRECT_URI

// Scope spotify api request

const SCOPE = process.env.SCOPE

// Authentication state key

const STATE_KEY = 'spotify_auth_state'

// Api request queries
const MARKET = 'US'
const LOW_LIMIT = 12
const DEFAULT_LIMIT = 28

module.exports = {
  BASE_URL,
  TOKEN_BASE_URL,
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI,
  SCOPE,
  STATE_KEY,
  MARKET,
  LOW_LIMIT,
  DEFAULT_LIMIT
}
