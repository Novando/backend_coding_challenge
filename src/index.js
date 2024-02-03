import "dotenv/config"
import helmet from "helmet"
import express from "express"
import cors from "cors"
import di from "./config/di.js"
import {initDb} from "./config/sequelize.js"

try {
  const db = await initDb()
  const app = express()
  const port = process.env.APP_PORT
  app.use(helmet())
  app.use(cors())
  app.use(express.json())
  app.use('/v1', di(db))

  app.listen(port, () => {
    console.log(`${process.env.APP_NAME} listening on port ${port}`)
  })
} catch (err) {
  console.error(err)
  process.exit(1)
}
