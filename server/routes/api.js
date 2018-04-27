const express = require('express')

const api = express.Router()

api.get('/messages', (req, res) => {
  res.json([
    { message: 'Hello, world!' },
    { message: 'Hi, simple-chat!' },
    { message: ':)' },
  ])
})

module.exports = api
