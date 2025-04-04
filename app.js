'use strict'

const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const path = require('path')

const app = express()
const PORT = 3000

// Routes

const login = require('./src/routes/login.route')
const auth = require('./src/routes/auth.route')

const authenticatedUser = require('./src/middlewares/auth_user.middleware')

// EJS

app.set('view engine', 'ejs')

// middlewares

app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())
app.use(cookieParser())
app.use(express.json())

// Login

app.use('/login', login)

// Auth

app.use('/auth', auth)

app.use(authenticatedUser)

app.listen(PORT, () => {
  console.log(`Servidor inicializado en http://localhost:${PORT}`)
})
