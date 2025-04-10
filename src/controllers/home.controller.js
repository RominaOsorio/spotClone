'use strict'

const apiConfig = require('../config/api.config')
const userApi = require('../api/user.api')
const playersApi = require('../api/players.api')
const trackApi = require('../api/track.api')

const home = async (req, res) => {
  // current Profile
  const currentProfile = await userApi.getProfile(req)

  // recently played tracks
  const recentlyPlayed = await playersApi.getRecentlyPlayed(req)
  const recentlyPlayedTracks = recentlyPlayed.items.map(({ track }) => track)

  console.log(recentlyPlayedTracks);
  
  // recommended tracks

  // const trackIds = recentlyPlayedTracks.map(({ id }) => id)
  // const trackSeed = trackIds.slice(0, 5).join(',')
  // const recommendedAlbums = await trackApi.getRecommendedTracks(req, trackSeed, apiConfig.LOW_LIMIT)

  // console.log(trackSeed)
  // console.log(recommendedAlbums)

  res.render('./pages/home', {
    currentProfile
    // recentlyPlayedTracks
  })
}

module.exports = { home }
