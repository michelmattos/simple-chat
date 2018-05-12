// @flow
import express from 'express'
import type { $Request, $Response } from 'express'

const api = express.Router()

const createMessage = (message: string) => ({ message })

api.get('/messages', (req: $Request, res: $Response) => {
  res.json([
    createMessage('Hello, world!'),
    createMessage('Hi, simple-chat!'),
    createMessage(':)'),
  ])
})

export default api
