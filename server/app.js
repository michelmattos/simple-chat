import path from 'path'
import console from 'console'
import express from 'express'
import routes from './routes'

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(routes)

app.listen(3000, () => {
  console.log('Listening to 3000...')
})
