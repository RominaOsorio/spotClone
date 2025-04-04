/* eslint-disable camelcase */
'use strict'

const authenticatedUser = (req, res, next) => {
  const {
    access_token,
    refresh_token
  } = req.cookies

  // Si hay un access_token pero no un refresh_token, redirige a /auth
  if (access_token && !refresh_token) {
    return res.redirect('/auth')
    // Si no hay access_token ni refresh_token, redirige a /login
  } else if (!access_token && !refresh_token) {
    return res.redirect('/login')
    // Si no hay access_token pero sí refresh_token, redirige a /auth/refresh_token con la URL original
  } else if (!access_token && refresh_token) {
    return res.redirect(`/auth/refresh_token?redirect=${req.originalUrl}`)
  }
  next()
}

module.exports = authenticatedUser
