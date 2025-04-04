'use strict'

const express = require('express')
const router = express.Router()

const { home } = require('../controllers/home.controller')

router.get('/', home)

module.exports = router
