import 'dotenv/config'
import express from 'express'

import { success } from './utils/logger/logger'
import middlewaresConfig from './config/middlewares/middlwares'
import routes from './routes/index'

const app = express()

middlewaresConfig(app)

routes(app)

const port = process.env.NODE_PORT || 5000

app.listen(port, () => {
  success(`${process.env.APP_NAME} is listening on port: ${port}`)
})
