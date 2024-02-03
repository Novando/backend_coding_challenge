import {Router} from "express"
import {AppRepository} from "../repository/app.js"
import {AppService} from "../service/app.js"
import {AppController} from "../controller/app.js"
import appRouter from "../route/app.js"


export default function (sequelize) {
  const router = Router()

  // Repository
  const ra = new AppRepository(sequelize)

  // Service
  const sa = new AppService(ra)

  // Controller
  const ca = new AppController(sa)

  // Routing
  router.use('/app', appRouter(ca))

  return router
}