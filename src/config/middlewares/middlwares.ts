import { Application, urlencoded, json } from 'express'
import cors from 'cors'
import morgan from 'morgan'

export default (app: Application): void => {
  app.use(cors())

  app.use(json())

  app.use(
    urlencoded({
      extended: false
    })
  )

  app.use(morgan('dev'))
}
