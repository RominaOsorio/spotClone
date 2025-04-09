'use strict'

const userApi = require('../api/user.api')
const playersApi = require('../api/players.api')

const home = async (req, res) => {
  // current Profile
  const currentProfile = await userApi.getProfile(req)

  // recently played tracks
  const recentlyPlayed = await playersApi.getRecentlyPlayed(req)
  const recentlyPlayedTracks = recentlyPlayed.items.map(({ track }) => track)

  console.log(recentlyPlayedTracks)

  res.render('./pages/home', {
    currentProfile
    // recentlyPlayedTracks
  })
}

module.exports = { home }
