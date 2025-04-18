/* eslint-disable camelcase */
'use strict'

const login = (req, res) => {
  const { access_token, refresh_token } = req.cookies
  if (access_token && refresh_token) {
    return res.redirect('/')
  } else {
    res.render('./pages/login')
  }
}

module.exports = { login }
