const express = require('express')

const api = express.Router()

api.get('/messages', (req, res) => {
  res.json([
    { message: 'Hello, world!' },
    { message: 'Hi, simple-chat!' },
  ])
})

module.exports = api