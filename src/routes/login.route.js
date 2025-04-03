'use strict'

const express = require('express')
const router = express.Router()

const { login } = require('../controllers/login.controller')

router.get('/', login)

module.exports = router
