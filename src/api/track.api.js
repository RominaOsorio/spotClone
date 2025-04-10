'use strict'

const { getData } = require('../config/axios.config')

const getRecommendedTracks = async (req, trackSeed, itemLimit) => {
  const { data: { tracks: recommendedTracks } } = await getData(`/recommendations?seed_tracks=${trackSeed}&limit=${itemLimit}`, req.cookies.access_token)

  return recommendedTracks
}

module.exports = {
  getRecommendedTracks
}
