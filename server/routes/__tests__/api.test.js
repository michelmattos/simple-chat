import test from 'ava'
import request from 'supertest'
import express from 'express'
import api from '../api'

const app = express()
app.use(api)

test('GET /messages returns a list of messages', async t => {
  await request(app)
    .get('/messages')
    .expect(res => {
      t.is(res.status, 200)
      t.deepEqual(res.body, [
        { message: 'Hello, world!' },
        { message: 'Hi, simple-chat!' },
        { message: ':)' },
      ])
    })
})
